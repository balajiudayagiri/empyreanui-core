/**
 * Truncates a given text to a specified word limit and appends an ellipsis if necessary.
 *
 * This function splits the input text into words and truncates it to the specified word limit.
 * If the text exceeds the word limit, it appends an ellipsis ("...") to the truncated text.
 *
 * @function
 * @param {string} text - The text to be truncated.
 * @param {number} [wordLimit=20] - The maximum number of words to retain. Defaults to 20 if not specified.
 * @returns {string} - The truncated text with an ellipsis appended if it exceeds the word limit.
 *
 * @example
 * // Example usage:
 * const truncated = truncateText("This is a long text that needs to be truncated.", 5);
 * console.log(truncated); // Output: "This is a long text..."
 */
export function truncateText(text: string, wordLimit = 20): string {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
}
