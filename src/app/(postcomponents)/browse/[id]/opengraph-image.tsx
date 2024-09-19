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
        tw="flex flex-col w-full h-full items-center justify-center bg-black text-white font-bold"
        style={{ fontSize: 64 }}>
        <span>
          Empyrean<span tw="text-yellow-400">UI</span> Galler
        </span>
        <span tw="mt-4">{combinedSubSegments}</span>
      </div>
    ),
    {
      ...size,
    }
  );
}
