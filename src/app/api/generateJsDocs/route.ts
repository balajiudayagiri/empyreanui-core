import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";
import { jsDocsPrompting } from "empyreanui/promptEngineering/jsDocsPrompting";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const { projectDescription, conversation } = await req.json();

    const newConversation = [
      ...conversation,
      {
        role: "user",
        content: projectDescription,
      },
    ];

    const response = await groq.chat.completions.create({
      messages: [jsDocsPrompting, ...newConversation],
      model: "gemma2-9b-it",
      temperature: 0.7,
      max_tokens: 1024,
      top_p: 1,
      stream: true,
    });

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        for await (const chunk of response) {
          controller.enqueue(
            encoder.encode(chunk.choices[0]?.delta?.content || "")
          );
        }
        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    console.error("Error generating JSDocs:", error);
    return NextResponse.json(
      { message: "Failed to generate JSDocs" },
      { status: 500 }
    );
  }
}
