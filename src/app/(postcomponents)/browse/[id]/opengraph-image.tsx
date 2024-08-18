import { ImageResponse } from "next/og";

export const alt = "Empyrean UI Core";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }: { params: { id: string } }) {
  const subSegments = params.id.split("-");
  subSegments.pop();
  const combinedSubSegments = subSegments.join(" ").toString();
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
          fontWeight: "bold",
        }}>
        <span>
          Empyrean<span style={{ color: "#edcd4b" }}>UI</span> Galler
        </span>
        <span>{combinedSubSegments}</span>
      </div>
    ),
    {
      ...size,
    }
  );
}
