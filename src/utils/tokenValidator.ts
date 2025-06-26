import HTTP_STATUS from "kodebloxui/constants/HTTP_STATUS.json";
import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";
import { ENV } from "./env_constants";

/**
 * Middleware function to validate JWT tokens from the request.
 *
 * This function extracts the JWT from the `Authorization` header of the request,
 * verifies its validity using a secret key, and returns the decoded token data.
 * If the token is invalid or missing, an error is thrown with an appropriate HTTP status code.
 *
 * @param {NextRequest} request - The Next.js request object containing headers.
 *
 * @returns {Promise<Object>} - A promise that resolves to the decoded JWT token data.
 *
 * @throws {Object} - Throws an error if the token is missing, invalid, or if verification fails.
 *
 * @throws {Object} - Error object with `status` and `error` properties:
 * - `status` {number} - HTTP status code indicating the type of error.
 * - `error` {string} - Error message explaining the issue.
 *
 * @example
 * try {
 *   const tokenData = await tokenValidator(request);
 *   // Use tokenData for further processing
 * } catch (error) {
 *   // Handle errors, e.g., send an unauthorized response
 * }
 */
const tokenValidator = async (request: NextRequest) => {
  let jwtToken;

  // Extract the JWT from the Authorization header
  const bearerToken = request.headers.get("authorization");

  if (bearerToken) {
    jwtToken = bearerToken.split(" ")[1];
  }
  if (jwtToken === undefined) {
    throw { status: HTTP_STATUS.UNAUTHORIZED, error: "Invalid JWT Token" };
  } else {
    try {
      // Verify the JWT using the secret token
      const data = jwt.verify(jwtToken, ENV.MY_SECRET_TOKEN!);
      return data as {
        username: string;
        email: string;
        _id: string;
        name: string;
        is_verified: boolean;
        user_role?: string;
      };
    } catch (error: any) {
      // Throw error if JWT verification fails
      throw { ...error, status: HTTP_STATUS.UNAUTHORIZED };
    }
  }
};

export default tokenValidator;
