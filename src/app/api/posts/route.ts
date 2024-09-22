import { NextRequest, NextResponse } from "next/server";
import dbConnect from "empyreanui/services/dbConnect";
import Post from "empyreanui/models/Post";
import { generateCustomUUID } from "empyreanui/utils";
import tokenValidator from "empyreanui/utils/tokenValidator";
import { updatePostActivity } from "../_helpers";

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const id = req.nextUrl.searchParams.get("id");

    if (id) {
      const post = await Post.findById(id);
      if (!post) {
        return NextResponse.json(
          { success: false, error: "Post not found" },
          { status: 404 }
        );
      }
      return NextResponse.json(
        { success: true, data: post },
        {
          status: 200,
          headers: {
            "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=59",
            "CDN-Cache-Control":
              "public, s-maxage=3600, stale-while-revalidate=59",
            "Vercel-CDN-Cache-Control":
              "public, s-maxage=3600, stale-while-revalidate=59",
          },
        }
      );
    } else {
      const posts = await Post.find({});
      return NextResponse.json(
        { success: true, data: posts },
        {
          status: 200,
          headers: {
            "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=59",
            "CDN-Cache-Control":
              "public, s-maxage=3600, stale-while-revalidate=59",
            "Vercel-CDN-Cache-Control":
              "public, s-maxage=3600, stale-while-revalidate=59",
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
    const { _id } = await tokenValidator(req);
    const body = await req.json();
    const customId = generateCustomUUID(10);
    const postData = {
      customId,
      ...body,
    };
    const post: Record<string, any> = await Post.create(postData);
    updatePostActivity(_id, "component_ids", post?._id);
    return NextResponse.json({ success: true, data: post }, { status: 201 });
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
    const post = await Post.findByIdAndUpdate(id, body, { new: true });
    if (!post) {
      return NextResponse.json(
        { success: false, error: "Post not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: post });
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
    const post = await Post.findByIdAndDelete(id);
    if (!post) {
      return NextResponse.json(
        { success: false, error: "Post not found" },
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
