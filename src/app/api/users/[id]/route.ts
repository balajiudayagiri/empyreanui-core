import users from "empyreanui/models/Empyrean_users";

import { NextRequest, NextResponse } from "next/server";

import HTTP_STATUS from "empyreanui/constants/HTTP_STATUS.json";

import mongoConnection from "empyreanui/services/db2connect";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
  } catch (error) {}
}
