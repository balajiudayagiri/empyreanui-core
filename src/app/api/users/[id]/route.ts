import mongoose from "mongoose";

import users from "kodebloxui/models/Empyrean_users";

import { NextRequest, NextResponse } from "next/server";

import HTTP_STATUS from "kodebloxui/constants/HTTP_STATUS.json";

import mongoConnection from "kodebloxui/services/dbConnect";
import tokenValidator from "kodebloxui/utils/tokenValidator";

const { ObjectId } = mongoose.Types;

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await mongoConnection();

    const { id } = params;

    await tokenValidator(request);
    const getUser = await users.findOne({ _id: new ObjectId(id) });

    if (getUser) {
      return NextResponse.json(
        { ...getUser._doc },
        { status: HTTP_STATUS.ACCEPTED }
      );
    }

    return NextResponse.json(
      { message: "No user found" },
      { status: HTTP_STATUS.NOT_FOUND }
    );
  } catch (error: any) {
    const { status = HTTP_STATUS.INTERNAL_SERVER_ERROR, ...err } = error;
    return NextResponse.json(
      { message: error.message, ...err },
      { status: status }
    );
  }
}
