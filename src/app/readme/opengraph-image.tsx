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
        tw="flex w-full h-full items-center justify-center bg-white text-black font-bold"
        style={{ fontSize: 64 }}>
        Empyrean
        <span tw="text-blue-600">UI</span> Readme.md editor
      </div>
    ),
    {
      ...size,
    }
  );
}
