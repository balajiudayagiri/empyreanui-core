// middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Simple rate limiting middleware
const RATE_LIMIT = 5; // Number of allowed requests
const WINDOW_SIZE = 60 * 1000; // 1 minute

const requestCounts: { [key: string]: { count: number; startTime: number } } =
  {};

export function middleware(request: NextRequest) {
  const ip = request.ip || request.headers.get("x-forwarded-for") || "unknown";

  const currentTime = Date.now();
  if (!requestCounts[ip]) {
    requestCounts[ip] = { count: 1, startTime: currentTime };
  } else {
    if (currentTime - requestCounts[ip].startTime < WINDOW_SIZE) {
      requestCounts[ip].count += 1;
      if (requestCounts[ip].count > RATE_LIMIT) {
        return new NextResponse("Too many requests, please try again later.", {
          status: 429,
        });
      }
    } else {
      requestCounts[ip] = { count: 1, startTime: currentTime };
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/api/generate-pdf",
};
