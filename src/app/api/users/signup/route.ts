import HTTP_STATUS from "empyreanui/constants/HTTP_STATUS.json";
import mongoConnection from "empyreanui/services/db2connect";
import { NextRequest, NextResponse } from "next/server";
import User from "empyreanui/models/Empyrean_users";
import otp from "empyreanui/models/OTP";
import { checkUserAndEmail, validateInputs } from "./_helpers";
import sendMail from "empyreanui/utils/mailer";
import generateOTP from "empyreanui/utils/generateOTP";

export async function POST(request: NextRequest) {
  try {
    await mongoConnection();

    let body = await request.json();

    body = await validateInputs(body);

    await checkUserAndEmail(body?.username, body?.email);

    const createUser = await User.create(body);

    await otp.create({
      user_id: createUser._doc._id,
      otp: generateOTP(),
      user_verification_id: createUser._doc.verification_id,
    });

    await sendMail(createUser._doc, "Verify");

    return NextResponse.json(
      { ...createUser._doc },
      { status: HTTP_STATUS.OK }
    );
  } catch (error: any) {
    const { status, ...err } = error;

    return NextResponse.json(
      { message: error.message, ...err },
      { status: status || HTTP_STATUS.INTERNAL_SERVER_ERROR }
    );
  }
}
