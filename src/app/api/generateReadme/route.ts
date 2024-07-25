import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";
import { readmePrompting } from "empyreanui/promptEngineering/readmePrompting";

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
      messages: [readmePrompting, ...newConversation],
      model: "gemma2-9b-it",
      temperature: 0.7,
      max_tokens: 1024,
      top_p: 1,
      stream: false,
    });

    return NextResponse.json({
      readme: response.choices[0]?.message?.content || "",
    });
  } catch (error) {
    console.error("Error generating README:", error);
    return NextResponse.json(
      { message: "Failed to generate README" },
      { status: 500 }
    );
  }
}
