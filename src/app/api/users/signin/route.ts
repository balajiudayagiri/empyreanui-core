import { NextRequest, NextResponse } from "next/server";
import HTTP_STATUS from "empyreanui/constants/HTTP_STATUS.json";
import { validateInputs, validateUser } from "./_helpers";
import mongoConnection from "empyreanui/services/db2connect";

/**
 * Handles POST requests for user login.
 *
 * This function processes a POST request to authenticate a user. It performs the following actions:
 * 1. Establishes a connection to the MongoDB database.
 * 2. Parses and validates the request body using the `validateInputs` function.
 * 3. Authenticates the user by validating their email and password using the `validateUser` function.
 * 4. Returns a JSON response containing a token if authentication is successful.
 * 5. Handles and returns errors with appropriate messages and HTTP status codes if any part of the process fails.
 *
 * On success, it returns a JSON response with the authentication token and HTTP status 200.
 * On error, it returns a JSON response with an error message and an appropriate HTTP status code.
 *
 * @param {NextRequest} request - The Next.js request object containing the HTTP request information.
 * @returns {Promise<NextResponse>} A promise that resolves to a Next.js response object containing:
 * - `token` (string): The authentication token if login is successful.
 * - `error` (string): An error message if an error occurs during processing.
 * @throws {Object} Throws an error object if any part of the process fails, including:
 * - Validation errors from `validateInputs`.
 * - Authentication errors from `validateUser`.
 * - Database connection or query errors.
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // Establish a connection to the MongoDB database
    await mongoConnection();

    // Parse and validate the request body
    const body = await request.json();
    await validateInputs(body);

    // Authenticate the user and generate a token
    const token = await validateUser(body.email, body.password);
    // Return a JSON response with the token and HTTP status 200
    return NextResponse.json({ token }, { status: HTTP_STATUS.OK });
  } catch (error: any) {
    // Extract status and other details from the error object
    const { status, ...err } = error;

    // Return an error response with the appropriate status code and message
    return NextResponse.json(
      { error: error.message, ...err },
      { status: status || HTTP_STATUS.INTERNAL_SERVER_ERROR }
    );
  }
}
