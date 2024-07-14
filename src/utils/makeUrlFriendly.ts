/**
 * Converts a given sentence into a URL-friendly string.
 *
 * This function takes a sentence and transforms it into a URL-friendly string
 * by converting it to lowercase, replacing spaces with hyphens, removing
 * non-alphanumeric characters (except for hyphens), and trimming leading and
 * trailing hyphens.
 *
 * @function
 * @param {string} sentence - The sentence to be converted into a URL-friendly string.
 * @returns {string} - A URL-friendly version of the given sentence.
 *
 * @example
 * // Example usage:
 * const urlFriendly = makeUrlFriendly("Hello World! Welcome to TypeScript.");
 * console.log(urlFriendly); // Output: "hello-world-welcome-to-typescript"
 */
export function makeUrlFriendly(sentence: string): string {
  // Convert to lowercase
  sentence = sentence.toLowerCase();
  // Replace spaces with hyphens
  sentence = sentence.replace(/\s+/g, "-");
  // Remove non-alphanumeric characters except for hyphens
  sentence = sentence.replace(/[^a-z0-9\-]/g, "");
  // Remove leading and trailing hyphens
  sentence = sentence.replace(/^-+|-+$/g, "");
  return sentence;
}
