import { ImageResponse } from "next/og";

export const alt = "KodeBlox UI Core";
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
        tw="flex flex-col w-full h-full items-center justify-center bg-white text-black font-bold"
        style={{ fontSize: 64 }}>
        <span>
          KodeBlox<span tw="text-purple-500">UI</span> Blogs
        </span>
        <span tw="mt-4">{combinedSubSegments}</span>
      </div>
    ),
    {
      ...size,
    }
  );
}
