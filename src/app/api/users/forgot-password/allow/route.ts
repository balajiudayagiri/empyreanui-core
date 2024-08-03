import { checkUserAndEmail } from "./../../signup/_helpers/index";
import users from "empyreanui/models/Empyrean_users";
import { NextRequest, NextResponse } from "next/server";
import HTTP_STATUS from "empyreanui/constants/HTTP_STATUS.json";
import mongoConnection from "empyreanui/services/db2connect";
import User from "empyreanui/models/User";
import sendMail from "empyreanui/utils/mailer";

/**
 * Checks if a user with the given email exists and allows password reset.
 *
 * This function performs the following actions:
 * 1. Finds the user by email and updates the `pass_change_allowed` field to `true`.
 * 2. Sends a password reset email to the user if they exist.
 * 3. Throws an error if the user does not exist or if any operation fails.
 *
 * @param {string} email - The email address of the user who wants to reset their password.
 * @throws {Object} Throws an error object if any operation fails, including:
 * - `status` (number): HTTP status code indicating the type of error.
 * - `message` (string): A descriptive error message.
 * @returns {Promise<void>} A promise that resolves when the email has been sent successfully, or an error is thrown.
 */
const checkExistingAndSetAllow = async (email: string): Promise<void> => {
  try {
    // Update the user's record to allow password changes and retrieve the updated document
    const setOnExisting = await users.findOneAndUpdate(
      { email },
      { pass_change_allowed: true },
      {
        new: true,
      }
    );

    // If the user exists, send a password reset email
    if (setOnExisting) {
      await sendMail(
        { ...setOnExisting._doc, resetLinks: "000000" }, // 'resetLinks' is placeholder and should be replaced with actual reset link
        "ForgotPassword"
      );
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
    const { email } = body;

    // Check if the user exists and allow password reset
    await checkExistingAndSetAllow(email);

    // Return a JSON response with a success message and HTTP status 200
    return NextResponse.json(
      { message: "Mail sent" },
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
