import Blog from "empyreanui/models/Blog";
import dbConnect from "empyreanui/services/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await dbConnect();

    const idsQuery = req.nextUrl.searchParams.get("ids");

    if (idsQuery) {
      // Split the comma-separated string into an array of IDs
      const ids = idsQuery.split(",");

      // Fetch blogs matching the provided ids
      const blogs = await Blog.find({ _id: { $in: ids } });

      if (blogs.length === 0) {
        return NextResponse.json(
          { success: false, error: "Blogs not found" },
          { status: 404 }
        );
      }

      return NextResponse.json(
        { success: true, data: blogs },
        {
          status: 200,
          headers: {
            "Cache-Control": "public, s-maxage=1, stale-while-revalidate=59",
            "CDN-Cache-Control":
              "public, s-maxage=1, stale-while-revalidate=59",
            "Vercel-CDN-Cache-Control":
              "public, s-maxage=1, stale-while-revalidate=59",
          },
        }
      );
    } else {
      return NextResponse.json(
        { success: false, error: "No IDs provided" },
        { status: 400 }
      );
    }
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, error: "Unknown error" },
      { status: 400 }
    );
  }
}
