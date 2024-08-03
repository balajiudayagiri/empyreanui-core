import mongoose, { Schema } from "mongoose";
import users from "empyreanui/models/Empyrean_users";

import { NextRequest, NextResponse } from "next/server";

import HTTP_STATUS from "empyreanui/constants/HTTP_STATUS.json";

import mongoConnection from "empyreanui/services/db2connect";

import tokenValidator from "empyreanui/utils/tokenValidator";

export async function GET(request: NextRequest) {
  try {
    await mongoConnection();

    const { _id, user_role = "USER" } = await tokenValidator(request);

    let getusers;

    if (user_role.toUpperCase() === "ADMIN") {
      getusers = await users.find();

      return NextResponse.json(getusers, { status: HTTP_STATUS.OK });
    } else {
      getusers = await users.findOne({ _id });

      if (getusers) {
        return NextResponse.json(
          { ...getusers._doc },
          { status: HTTP_STATUS.OK }
        );
      }
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
