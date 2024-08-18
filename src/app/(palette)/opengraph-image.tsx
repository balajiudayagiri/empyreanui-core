import { ImageResponse } from "next/og";

export const alt = "Empyrean UI Core";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
          fontWeight: "bold",
        }}>
        <span>
          Empyrean<span style={{ color: "#edcd4b" }}>UI</span>
        </span>
        <div
          style={{
            marginTop: "20px",
            fontSize: 48,
            background:
              "linear-gradient(to right, #FFB3B3, #FFD180, #FFFF99, #B3FFB3, #B3D9FF, #C299FF, #E6B3FF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
          Color Palette
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
