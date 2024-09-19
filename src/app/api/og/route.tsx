// app/api/og/route.tsx
import { ImageResponse } from "next/og";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const title = url.searchParams.get("title") || "Default Title";
  const description =
    url.searchParams.get("description") || "Default description";

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          color: "black",
          background: "white",
          width: "100%",
          height: "100%",
          padding: "50px 200px",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>{title}</h1>
        <p style={{ fontSize: "24px" }}>{description}</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
