import HTTP_STATUS from "kodebloxui/constants/HTTP_STATUS.json";
import mongoConnection from "kodebloxui/services/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import User from "kodebloxui/models/Empyrean_users";
import OTP from "kodebloxui/models/OTP";
import { checkUserAndEmail, validateInputs } from "./_helpers";
import sendMail from "kodebloxui/utils/mailer";
import generateOTP from "kodebloxui/utils/generateOTP";

/**
 * Handles POST requests for user registration and OTP generation.
 *
 * This function processes a POST request to register a new user. It performs the following actions:
 * 1. Validates and sanitizes the input data.
 * 2. Checks if the username and email are already in use.
 * 3. Creates a new user document in the database.
 * 4. Generates a new OTP (One-Time Password).
 * 5. Creates an OTP record associated with the newly created user.
 * 6. Sends a verification email to the user with the OTP.
 *
 * On success, it returns the created user document with HTTP status 200.
 * On error, it returns a JSON response with an error message and an appropriate HTTP status code.
 *
 * @param {NextRequest} request - The Next.js request object containing the HTTP request information.
 * @returns {Promise<NextResponse>} A Next.js response object containing the created user document or an error message.
 * @throws {Object} Throws an error object if any step in the process fails, including:
 * - Validation errors
 * - Duplicate username or email
 * - Database errors
 * - Email sending errors
 */

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // Establish a connection to the MongoDB database
    await mongoConnection();

    let body = await request.json();

    body = await validateInputs(body);

    // Check for existing username and email in the database
    await checkUserAndEmail(body?.username, body?.email);

    // Create a new user document in the database
    const createUser = await User.create(body);

    // Generate a new OTP for the user
    const otp = generateOTP();

    // Create a new OTP record in the database associated with the created user
    await OTP.create({
      user_id: createUser._doc._id,
      otp,
      user_verification_id: createUser._doc.verification_id,
    });

    // Send a verification email to the user with the generated OTP
    await sendMail({ ...createUser._doc, otp }, "Verify");

    // Return the created user document with HTTP status 200
    return NextResponse.json(
      { ...createUser._doc },
      { status: HTTP_STATUS.OK }
    );
  } catch (error: any) {
    // Extract status and other details from the error object
    const { status, ...err } = error;

    // Return an error response with the appropriate status code and message
    return NextResponse.json(
      { message: error.message, ...err },
      { status: status || HTTP_STATUS.INTERNAL_SERVER_ERROR }
    );
  }
}
