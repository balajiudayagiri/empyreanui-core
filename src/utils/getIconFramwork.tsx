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
