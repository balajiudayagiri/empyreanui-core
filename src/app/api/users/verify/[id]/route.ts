import ERROR_MESSAGES from "empyreanui/constants/ERROR_MESSAGES.json";
import HTTP_STATUS from "empyreanui/constants/HTTP_STATUS.json";

import { NextRequest, NextResponse } from "next/server";

import { v4 } from "uuid";

import User from "empyreanui/models/Empyrean_users";

import mongoConnection from "empyreanui/services/db2connect";

import OTP from "empyreanui/models/OTP";

const validateOTP = async (id: string, body: { otp?: number }) => {
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

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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
