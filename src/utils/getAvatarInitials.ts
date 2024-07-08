export const getAvatarInitials = (name: string): string => {
  if (!name) return "";
  return name.charAt(0).toUpperCase();
};
const colors = [
  "#1F618D",
  "#2980B9",
  "#3498DB",
  "#2E86C1",
  "#1ABC9C",
  "#16A085",
  "#27AE60",
  "#229954",
  "#F39C12",
  "#E67E22",
  "#D35400",
  "#C0392B",
  "#E74C3C",
  "#8E44AD",
  "#9B59B6",
  "#34495E",
  "#2C3E50",
];

export const getAvatarBgColor = (): string => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};
