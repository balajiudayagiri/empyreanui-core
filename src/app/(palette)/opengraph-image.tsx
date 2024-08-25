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
        tw="flex flex-col w-full h-full items-center justify-center bg-black text-white font-bold"
        style={{ fontSize: 64 }}>
        <span>
          Empyrean<span tw="text-yellow-400">UI</span>
        </span>
        <div
          tw="mt-5 text-transparent bg-clip-text"
          style={{
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
