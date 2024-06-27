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

// Helper function to convert RGB to HSL
function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);

  let h: number,
    s: number,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
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
      default:
        throw new Error("Unexpected max value");
    }

    h /= 6;
  }

  return [h * 360, s, l];
}

export const invertColor = (hexColor: string): string => {
  // Function to invert the color
  const hex = hexColor.replace(/^#/, "");
  const r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16);
  const g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16);
  const b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
  return `#${padZero(r)}${padZero(g)}${padZero(b)}`;
};

export const padZero = (str: string, len: number = 2): string => {
  // Function to pad zeros to get consistent two-digit values
  const zeros = new Array(len).join("0");
  return (zeros + str).slice(-len);
};
