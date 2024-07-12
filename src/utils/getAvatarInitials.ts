/**
 * Extracts the initial from a given name and returns it in uppercase.
 *
 * This function takes a name string, extracts the first character, and converts
 * it to uppercase to be used as an avatar initial. If the name is empty, it returns
 * an empty string.
 *
 * @function
 * @param {string} name - The name from which the initial is to be extracted.
 * @returns {string} - The uppercase initial of the given name, or an empty string if the name is empty.
 *
 * @example
 * // Example usage:
 * const initial = getAvatarInitials("John Doe");
 * console.log(initial); // Output: "J"
 */
export const getAvatarInitials = (name: string): string => {
  if (!name) return "";
  return name.charAt(0).toUpperCase();
};

/**
 * Generates a random background color for an avatar.
 *
 * This function selects a random color from a predefined array of color codes.
 * These colors can be used as background colors for avatars.
 *
 * @function
 * @returns {string} - A random color code from the predefined array of colors.
 *
 * @example
 * // Example usage:
 * const bgColor = getAvatarBgColor();
 * console.log(bgColor); // Output might be something like: "#2980B9"
 */
export const getAvatarBgColor = (): string => {
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

  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};
