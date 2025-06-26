import { ImageResponse } from "next/og";

export const alt = "KodeBlox UI Core";
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
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          color: "black",
          padding: "64px 80px",
          justifyContent: "center",
          fontFamily: "Inter, sans-serif",
        }}>
        {/* Logo + Name Row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginBottom: "40px",
          }}>
          {/* SVG Logo */}
          <svg
            width={120}
            height={120}
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 21C0 9.40202 9.40202 0 21 0H179C190.598 0 200 9.40202 200 21V200H21C9.40202 200 0 190.598 0 179V21Z"
              fill="#FDC705"
            />
            <path
              d="M0 90C0 78.402 9.40202 69 21 69H87V200H0V90Z"
              fill="black"
            />
            <rect
              width="40"
              height="40"
              transform="translate(87 29)"
              fill="black"
            />
            <rect x="142" y="142" width="56" height="56" fill="white" />
            <rect
              x="142"
              y="142"
              width="56"
              height="56"
              stroke="black"
              strokeWidth="4"
            />
            <rect
              x="85"
              y="142"
              width="56"
              height="56"
              stroke="black"
              strokeWidth="4"
            />
            <path
              d="M23.072 101.728L62.368 75.872V93.536L39.328 107.872L62.368 122.848V140.64L23.072 114.144V101.728ZM112.172 54.496H129.196L85.804 159.968H68.78L112.172 54.496ZM135.876 140.64V122.848L158.916 107.872L135.876 93.536V75.872L175.172 101.728V114.144L135.876 140.64Z"
              fill="white"
            />
          </svg>

          {/* Text Logo */}
          <h1
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "baseline",
              gap: "8px",
            }}>
            <span style={{ fontSize: "56px", fontWeight: "900" }}>
              KodeBlox
            </span>
            <span
              style={{
                fontSize: "56px",
                fontWeight: "900",
                color: "#FACC15",
              }}>
              UI
            </span>
          </h1>
        </div>

        {/* Text Content */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2
            style={{
              fontSize: "48px",
              fontWeight: 900,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              marginBottom: "16px",
            }}>
            Build faster with reusable components
          </h2>
          <p
            style={{
              fontSize: "20px",
              color: "#6B7280",
              maxWidth: "800px",
              lineHeight: 1.6,
              fontWeight: 400,
            }}>
            KodeBloxUI is a collaborative platform for UI component sharing and
            management. Build your next project faster with our library of
            reusable components.
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
