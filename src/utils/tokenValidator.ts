import HTTP_STATUS from "empyreanui/constants/HTTP_STATUS.json";

import jwt from "jsonwebtoken";

import { NextRequest } from "next/server";

const tokenValidator = async (request: NextRequest) => {
  let jwtToken;

  const bearerToken = request.headers.get("authorization");

  if (bearerToken) {
    jwtToken = bearerToken.split(" ")[1];
  }
  if (jwtToken === undefined) {
    throw { status: HTTP_STATUS.UNAUTHORIZED, error: "Invalid JWT Token" };
  } else {
    try {
      const data = jwt.verify(jwtToken, process.env.MY_SECRET_TOKEN!);
      return data;
    } catch (error: any) {
      throw { ...error, status: HTTP_STATUS.UNAUTHORIZED };
    }
  }
};

export default tokenValidator;
