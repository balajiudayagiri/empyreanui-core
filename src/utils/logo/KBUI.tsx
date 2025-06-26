import React from "react";

function KBUI({
  size = 24,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 21C0 9.40202 9.40202 0 21 0H179C190.598 0 200 9.40202 200 21V200H21C9.40202 200 0 190.598 0 179V21Z"
        fill="#FDC705"
      />
      <path d="M0 90C0 78.402 9.40202 69 21 69H87V200H0V90Z" fill="black" />
      <rect width="40" height="40" transform="translate(87 29)" fill="black" />
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
  );
}

export default KBUI;
