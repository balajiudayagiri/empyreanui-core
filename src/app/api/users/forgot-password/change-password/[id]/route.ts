import users from "empyreanui/models/Empyrean_users";
import { NextRequest, NextResponse } from "next/server";
import HTTP_STATUS from "empyreanui/constants/HTTP_STATUS.json";
import mongoConnection from "empyreanui/services/dbConnect";
import { v4 } from "uuid";
import bcrypt from "bcrypt";

/**
 * Handles POST requests to change a user's password.
 *
 * This function processes a POST request for changing a user's password. It performs the following actions:
 * 1. Establishes a connection to the MongoDB database.
 * 2. Parses and validates the request body.
 * 3. Hashes the new password using bcrypt.
 * 4. Updates the user's password and generates a new verification ID.
 * 5. Returns a JSON response indicating the success or failure of the operation.
 * 6. Handles and returns errors with appropriate messages and HTTP status codes if any part of the process fails.
 *
 * On success, it returns a JSON response with a success message and HTTP status 200.
 * On error, it returns a JSON response with an error message and an appropriate HTTP status code.
 *
 * @param {NextRequest} request - The Next.js request object containing the HTTP request information.
 * @param {Object} params - The route parameters.
 * @param {string} params.id - The verification ID used to identify the user whose password is being changed.
 * @returns {Promise<NextResponse>} A promise that resolves to a Next.js response object containing:
 * - `message` (string): A message indicating the result of the password change operation.
 * @throws {Object} Throws an error object if the password change fails, including:
 * - `status` (number): HTTP status code indicating the type of error.
 * - `message` (string): An error message describing the failure.
 */
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  try {
    // Establish a connection to the MongoDB database
    await mongoConnection();

    // Parse the request body
    const body = await request.json();
    const { password } = body;

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update the user's password and generate a new verification ID
    const changePassword = await users.findOneAndUpdate(
      { verification_id: params.id },
      {
        password: hashedPassword,
        verification_id: v4(),
        pass_change_allowed: false,
      },
      {
        new: true,
      }
    );

    // Check if the password was successfully changed
    if (changePassword) {
      return NextResponse.json(
        { message: "Password Changed" },
        { status: HTTP_STATUS.OK }
      );
    }

    // If no user was found or updated, throw an error
    throw {
      status: HTTP_STATUS.BAD_REQUEST,
      message: "Password change failed",
    };
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
