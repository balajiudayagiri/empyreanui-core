import { NextRequest, NextResponse } from "next/server";
import dbConnect from "empyreanui/services/dbConnect";
import Blog from "empyreanui/models/Blog";
import { generateCustomUUID } from "empyreanui/utils";

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const id = req.nextUrl.searchParams.get("id");

    if (id) {
      const blog = await Blog.findById(id);
      if (!blog) {
        return NextResponse.json(
          { success: false, error: "blog not found" },
          { status: 404 }
        );
      }
      return NextResponse.json(
        { success: true, data: blog },
        {
          status: 200,
         headers: {
            "Cache-Control": "public, s-maxage=1, stale-while-revalidate=59",
            "CDN-Cache-Control": "public, s-maxage=1, stale-while-revalidate=59",
            "Vercel-CDN-Cache-Control": "public, s-maxage=1, stale-while-revalidate=59",
          },
        }
      );
    } else {
      const blogs = await Blog.find({});
      return NextResponse.json(
        { success: true, data: blogs },
        {
          status: 200,
         headers: {
            "Cache-Control": "public, s-maxage=1, stale-while-revalidate=59",
            "CDN-Cache-Control": "public, s-maxage=1, stale-while-revalidate=59",
            "Vercel-CDN-Cache-Control": "public, s-maxage=1, stale-while-revalidate=59",
          },
        }
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

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const body = await req.json();
    const customId = generateCustomUUID(10);
    const blogData = {
      customId,
      ...body,
    };
    const blog = await Blog.create(blogData);
    return NextResponse.json({ success: true, data: blog }, { status: 201 });
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

export async function PUT(req: NextRequest) {
  try {
    await dbConnect();
    const id = req.nextUrl.searchParams.get("id");
    if (!id) {
      return NextResponse.json(
        { success: false, error: "ID is required" },
        { status: 400 }
      );
    }
    const body = await req.json();
    const blog = await Blog.findByIdAndUpdate(id, body, { new: true });
    if (!blog) {
      return NextResponse.json(
        { success: false, error: "blog not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: blog });
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

export async function DELETE(req: NextRequest) {
  try {
    await dbConnect();
    const id = req.nextUrl.searchParams.get("id");
    if (!id) {
      return NextResponse.json(
        { success: false, error: "ID is required" },
        { status: 400 }
      );
    }
    const blog = await Blog.findByIdAndDelete(id);
    if (!blog) {
      return NextResponse.json(
        { success: false, error: "blog not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true });
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
