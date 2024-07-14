/**
 * Converts an RGB string to various color codes: HEX, RGB, and HSL.
 * @param {string} rgbString - The RGB string in the format 'rgb(r, g, b)'.
 * @returns {{ hex: string, rgb: string, hsl: string }} - An object containing the HEX, RGB, and HSL color codes.
 */
export function rgbStringToAllColors(rgbString: string): {
  hex: string;
  rgb: string;
  hsl: string;
} {
  const rgbValues =
    rgbString.match(/\d+/g)?.map((component) => parseInt(component, 10)) ?? [];

  const hex = rgbValues
    .map((component) => component.toString(16).padStart(2, "0"))
    .join("");

  const hexCode = `#${hex.toUpperCase()}`;

  const rgbCode = `rgb(${rgbValues.join(", ")})`;

  const hsl = rgbToHsl(
    rgbValues[0] / 255,
    rgbValues[1] / 255,
    rgbValues[2] / 255
  );
  const hslCode = `hsl(${Math.round(hsl[0])}, ${Math.round(
    hsl[1] * 100
  )}%, ${Math.round(hsl[2] * 100)}%)`;

  return {
    hex: hexCode,
    rgb: rgbCode,
    hsl: hslCode,
  };
}

/**
 * Converts RGB values to HSL values.
 * 
 * This function takes the red, green, and blue components of a color (each ranging from 0 to 255)
 * and converts them to the hue, saturation, and lightness (HSL) representation.
 * 
 * @function
 * @param {number} r - The red component (0-255).
 * @param {number} g - The green component (0-255).
 * @param {number} b - The blue component (0-255).
 * @returns {[number, number, number]} - An array containing the HSL values where 
 *                                       hue is in degrees (0-360), and saturation 
 *                                       and lightness are in percentages (0-100), 
 *                                       with each value rounded to three decimal places.
 * 
 * @example
 * // Example usage:
 * const hsl = rgbToHsl(255, 0, 0);
 * console.log(hsl); // Output: [0, 100, 50]
 */
export function rgbToHsl(
  r: number,
  g: number,
  b: number
): [number, number, number] {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h: number = 0;
  let s: number = 0;
  const l: number = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return [
    parseFloat((h * 360).toFixed(3)),
    parseFloat((s * 100).toFixed(3)),
    parseFloat((l * 100).toFixed(3))
  ];
}

/**
 * Inverts a HEX color code.
 * @param {string} hexColor - The HEX color code to invert.
 * @returns {string} - The inverted HEX color code.
 */
export const invertColor = (hexColor: string): string => {
  const hex = hexColor.replace(/^#/, "");
  const r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16);
  const g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16);
  const b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
  return `#${padZero(r)}${padZero(g)}${padZero(b)}`;
};

/**
 * Pads a string with leading zeros to ensure a consistent length.
 * @param {string} str - The string to pad.
 * @param {number} [len=2] - The desired length of the output string.
 * @returns {string} - The padded string.
 */
export const padZero = (str: string, len: number = 2): string => {
  const zeros = new Array(len).join("0");
  return (zeros + str).slice(-len);
};

/**
 * Converts a HEX color code to RGB values.
 * @param {string} hex - The HEX color code.
 * @returns {{ r: number, g: number, b: number }} - An object containing the RGB values.
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  hex = hex.replace(/^#/, "");

  let bigint = parseInt(hex, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  return { r, g, b };
}

/**
 * Converts a HEX color code to various color codes: HEX, RGB, and HSL.
 * @param {string} hex - The HEX color code.
 * @returns {{ rgb: string, hsl: string, hex: string }} - An object containing the HEX, RGB, and HSL color codes.
 */
export function hexToColorCodes(hex: string): {
  rgb: string;
  hsl: string;
  hex: string;
} {
  const { r, g, b } = hexToRgb(hex);
  const [h, s, l] = rgbToHsl(r, g, b);
  return {
    rgb: `rgb(${r}, ${g}, ${b})`,
    hsl: `hsl(${h}, ${s}%, ${l}%)`,
    hex: `#${hex}`,
  };
}
