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
      <div tw="flex flex-col w-full h-full items-center justify-center bg-black text-white font-bold">
        <div tw="flex">
          <span tw="text-6xl">Empyrean</span>
          <span tw="text-6xl text-yellow-400">UI</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
