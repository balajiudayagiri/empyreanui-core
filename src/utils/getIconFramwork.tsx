import React, { FC } from "react";

interface IconProps {
  size?: string | number;
  height?: string | number;
  width?: string | number;
}

export const CSSICON: FC<IconProps> = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8" />
      <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD" />
      <path
        d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z"
        fill="white"
      />
    </svg>
  );
};

export const JSIcon: FC<IconProps> = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill="#f5cf0f">
      <g id="SVGRepo_bgCarrier" stroke-width="0" />

      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          fill="#ffc800"
          d="M9.633 7.968h3.751v10.514c0 4.738-2.271 6.392-5.899 6.392-0.888 0-2.024-0.148-2.764-0.395l0.42-3.036c0.518 0.173 1.185 0.296 1.925 0.296 1.58 0 2.567-0.716 2.567-3.282v-10.489zM16.641 20.753c0.987 0.518 2.567 1.037 4.171 1.037 1.728 0 2.641-0.716 2.641-1.826 0-1.012-0.79-1.629-2.789-2.32-2.764-0.987-4.59-2.517-4.59-4.961 0-2.838 2.394-4.985 6.293-4.985 1.9 0 3.258 0.37 4.245 0.839l-0.839 3.011c-0.642-0.321-1.851-0.79-3.455-0.79-1.629 0-2.419 0.765-2.419 1.604 0 1.061 0.913 1.53 3.085 2.369 2.937 1.086 4.294 2.616 4.294 4.985 0 2.789-2.122 5.158-6.688 5.158-1.9 0-3.776-0.518-4.714-1.037l0.765-3.085z"
        />{" "}
      </g>
    </svg>
  );
};

export const Tailwind: FC<IconProps> = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg">
      <title>file_type_tailwind</title>
      <path
        d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"
        fill="#44a8b3"
      />
    </svg>
  );
};

export const Html5ColoredIcon = ({ width, height }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26" />
      <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529" />
      <path
        d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z"
        fill="white"
      />
    </svg>
  );
};

const iconMap = {
  css: CSSICON,
  tailwind: Tailwind,
} as const;

type IconMap = typeof iconMap;

interface GetIconFrameworkProps {
  framework: keyof IconMap;
  size?: string | number;
}

export const GetIconFramework: React.FC<GetIconFrameworkProps> = ({
  framework,
  size,
}) => {
  const IconComponent = iconMap[framework];

  if (!IconComponent) {
    return <div>Icon not found</div>;
  }

  return <IconComponent size={size} />;
};
