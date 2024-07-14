/**
 * Extracts the ID from a URL-friendly string.
 *
 * This function takes a URL-friendly string that is expected to be
 * hyphen-separated and returns the last segment as the ID. This is
 * particularly useful for extracting identifiers from strings formatted
 * in a URL-friendly manner.
 *
 * @function
 * @param {string} urlFriendlyString - The URL-friendly string from which the ID needs to be extracted.
 *                                     This string should be hyphen-separated.
 * @returns {string} - Returns the last segment of the hyphen-separated string,
 *                     which is treated as the ID.
 *
 * @example
 * // Example usage:
 * const id = extractId("category-item-12345");
 * console.log(id); // Output: "12345"
 *
 * @throws {TypeError} - Throws an error if the input is not a string.
 */
export function extractId(urlFriendlyString: string): string {
  if (typeof urlFriendlyString !== "string") {
    throw new TypeError("The input must be a string");
  }
  // Split the string by hyphens
  const parts = urlFriendlyString.split("-");
  // Return the last part as the ID
  return parts[parts.length - 1];
}
