import { NextRequest, NextResponse } from "next/server";
import dbConnect from "kodebloxui/services/dbConnect";
import Post from "kodebloxui/models/Post";
import { generateCustomUUID } from "kodebloxui/utils";
import tokenValidator from "kodebloxui/utils/tokenValidator";
import { updatePostActivity } from "../_helpers";

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const id = req.nextUrl.searchParams.get("id");
    const page = parseInt(req.nextUrl.searchParams.get("page") || "1");
    const limit = parseInt(req.nextUrl.searchParams.get("limit") || "10");
    const category = req.nextUrl.searchParams.get("category");
    const styleType = req.nextUrl.searchParams.get("styleType");
    const searchTerm = req.nextUrl.searchParams.get("searchTerm");

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
      // Handle paginated and filtered list requests
      const skip = (page - 1) * limit;
      const query: any = {};

      if (category && category !== "all") {
        query.componentCategory = { $regex: new RegExp(category, "i") }; // Case-insensitive category search
      }

      if (styleType && styleType !== "all") {
        // Assuming styleType is nested under 'code'
        query["code.styleType"] = styleType;
      }

      if (searchTerm) {
        // Use the text index for efficient searching instead of regex.
        query.$text = { $search: searchTerm };
      }

      // Define sort options. Default to date, but use text score for search relevance.
      const sortOptions: any = searchTerm
        ? { score: { $meta: "textScore" } }
        : { date: -1 };

      // Define a projection to include the text score when searching.
      const projection = searchTerm ? { score: { $meta: "textScore" } } : {};

      // Run queries concurrently for better performance
      const [posts, totalCount, categories] = await Promise.all([
        Post.find(query, projection).sort(sortOptions).skip(skip).limit(limit),
        Post.countDocuments(query),
        // To optimize, only fetch the full category list on the first page request
        page === 1 ? Post.distinct("componentCategory") : Promise.resolve(null),
      ]);

      const responsePayload: any = {
        success: true,
        data: posts,
        totalCount,
      };

      // Include categories in the response only if they were fetched
      if (categories) {
        responsePayload.categories = categories;
      }

      return NextResponse.json(responsePayload, {
        status: 200,
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=59",
          "CDN-Cache-Control":
            "public, s-maxage=3600, stale-while-revalidate=59",
          "Vercel-CDN-Cache-Control":
            "public, s-maxage=3600, stale-while-revalidate=59",
        },
      });
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
