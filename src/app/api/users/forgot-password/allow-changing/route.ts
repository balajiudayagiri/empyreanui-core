import { checkUserAndEmail } from "../../signup/_helpers/index";
import users from "kodebloxui/models/Empyrean_users";
import { NextRequest, NextResponse } from "next/server";
import HTTP_STATUS from "kodebloxui/constants/HTTP_STATUS.json";
import ERROR_MESSAGES from "kodebloxui/constants/ERROR_MESSAGES.json";
import mongoConnection from "kodebloxui/services/dbConnect";
import User from "kodebloxui/models/User";
import sendMail from "kodebloxui/utils/mailer";
import generateOTP from "kodebloxui/utils/generateOTP";
import OTP from "kodebloxui/models/OTP";

const validateOTP = async (
  id: string,
  pin?: number | string
): Promise<void> => {
  const errors: { pin?: string } = {};

  const status: number = HTTP_STATUS.BAD_REQUEST;

  errors.pin = ERROR_MESSAGES.invalid_otp;
  const otp = Number(pin);
  if (otp && typeof otp === "number") {
    const isValidOtp = await OTP.findOne({
      user_verification_id: id,
      otp,
    });

    if (isValidOtp) {
      return;
    }
    throw { ...errors, status };
  }
  throw { ...errors, status };
};

/**
 * Checks if a user with the given email exists and allows password reset.
 *
 * This function performs the following actions:
 * 1. Finds the user by email and updates the `pass_change_allowed` field to `true`.
 * 2. Sends a password reset email to the user if they exist.
 * 3. Throws an error if the user does not exist or if any operation fails.
 *
 * @param {string} otp - The email address of the user who wants to reset their password.
 * @throws {Object} Throws an error object if any operation fails, including:
 * - `status` (number): HTTP status code indicating the type of error.
 * - `message` (string): A descriptive error message.
 * @returns {Promise<void>} A promise that resolves when the email has been sent successfully, or an error is thrown.
 */
const checkExistingAndSetAllow = async (id: string): Promise<void> => {
  try {
    // Update the user's record to allow password changes and retrieve the updated document

    const user = await users.findOneAndUpdate(
      { verification_id: id },
      { pass_change_allowed: true },
      {
        new: true,
      }
    );

    if (user) {
      return;
    }

    // If no user is found, throw an error
    const status = HTTP_STATUS.BAD_REQUEST;
    throw { status, message: "User not found or password change not allowed" };
  } catch (error: any) {
    // Throw the error with the message and status code
    throw { ...error, message: error.message };
  }
};

/**
 * Handles POST requests for initiating a password reset process.
 *
 * This function processes a POST request to initiate a password reset. It performs the following actions:
 * 1. Establishes a connection to the MongoDB database.
 * 2. Parses the request body to retrieve the email address.
 * 3. Calls the `checkExistingAndSetAllow` function to verify if the user exists and send a password reset email.
 * 4. Returns a JSON response indicating that the email was sent successfully.
 * 5. Handles and returns errors with appropriate messages and HTTP status codes if any part of the process fails.
 *
 * On success, it returns a JSON response with a success message and HTTP status 200.
 * On error, it returns a JSON response with an error message and an appropriate HTTP status code.
 *
 * @param {NextRequest} request - The Next.js request object containing the HTTP request information.
 * @returns {Promise<NextResponse>} A promise that resolves to a Next.js response object containing:
 * - `message` (string): A message indicating that the password reset email has been sent.
 * @throws {Object} Throws an error object if the password reset process fails, including:
 * - `status` (number): HTTP status code indicating the type of error.
 * - `message` (string): A descriptive error message.
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // Establish a connection to the MongoDB database
    await mongoConnection();

    // Parse the request body
    const body = await request.json();
    const { pin, verification_id } = body;
    await validateOTP(verification_id, pin);
    // Check if the user exists and allow password reset
    await checkExistingAndSetAllow(verification_id);

    // Return a JSON response with a success message and HTTP status 200
    return NextResponse.json(
      { message: "changing allowed" },
      { status: HTTP_STATUS.OK }
    );
  } catch (error: any) {
    // Extract status and other details from the error object
    const { status = HTTP_STATUS.INTERNAL_SERVER_ERROR, ...err } = error;

    // Return an error response with the appropriate status code and message
    return NextResponse.json(
      { message: error.message, ...err },
      { status: status }
    );
  }
}
