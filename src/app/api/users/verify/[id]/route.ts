import ERROR_MESSAGES from "empyreanui/constants/ERROR_MESSAGES.json";

import HTTP_STATUS from "empyreanui/constants/HTTP_STATUS.json";

import { NextRequest, NextResponse } from "next/server";

import { v4 } from "uuid";

import User from "empyreanui/models/Empyrean_users";

import mongoConnection from "empyreanui/services/db2connect";

import OTP from "empyreanui/models/OTP";

/**
 * Validates the One-Time Password (OTP) provided in the request body.
 *
 * This function checks if the provided OTP is valid by querying the OTP collection
 * for a record matching the provided user verification ID and OTP. If the OTP is invalid
 * or not provided, an error is thrown.
 *
 * @param {string} id - The user verification ID associated with the OTP.
 * @param {{ otp?: number }} body - The request body containing the OTP.
 * @param {number} body.otp - The OTP to be validated. It should be a number.
 * @throws {Object} Throws an error object with the `otp` field set to an invalid OTP error message
 *                   and a `status` field with the HTTP status code for bad requests.
 * @returns {Promise<void>} Resolves if the OTP is valid; otherwise, it throws an error.
 */

const validateOTP = async (
  id: string,
  body: { otp?: number }
): Promise<void> => {
  const errors: { otp?: string } = {};

  const status: number = HTTP_STATUS.BAD_REQUEST;

  errors.otp = ERROR_MESSAGES.invalid_otp;

  if (body?.otp && typeof body?.otp === "number") {
    const isValidOtp = await OTP.findOne({
      user_verification_id: id,
      otp: body?.otp,
    });

    if (isValidOtp) {
      return;
    }
    throw { ...errors, status };
  }
  throw { ...errors, status };
};

/**
 * Handles POST requests for user verification.
 *
 * This function processes a POST request to verify a user based on the provided OTP.
 * It first validates the OTP using the `validateOTP` function. If the OTP is valid,
 * it updates the user document to set `is_verified` to true and generates a new verification ID.
 *
 * The function handles the following scenarios:
 * - Successful verification: Returns a JSON response with a success message and HTTP status 200.
 * - Invalid OTP or user document: Returns a JSON response with an error message and HTTP status 400.
 * - Any other errors: Returns a JSON response with the error message and HTTP status 500.
 *
 * @param {NextRequest} request - The Next.js request object containing the HTTP request information.
 * @param {{ params: { id: string } }} params - The request parameters containing the user verification ID.
 * @param {string} params.id - The user verification ID used to identify the user to be verified.
 * @returns {Promise<NextResponse>} A Next.js response object containing the verification result.
 */

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  try {
    const { id } = params;

    const body = await request.json();

    await mongoConnection();

    await validateOTP(id, body);

    const findIdAndVerify = await User.findOneAndUpdate(
      { verification_id: id, is_verified: false },
      {
        is_verified: true,
        verification_id: v4(),
      },
      {
        new: true,
      }
    );

    if (findIdAndVerify) {
      return NextResponse.json(
        { message: "Verified" },
        { status: HTTP_STATUS.OK }
      );
    }
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  } catch (error: any) {
    const { status, ...err } = error;
    return NextResponse.json(
      {
        message: error.message || err.message,
        ...err,
      },
      { status: status || HTTP_STATUS.INTERNAL_SERVER_ERROR }
    );
  }
}
