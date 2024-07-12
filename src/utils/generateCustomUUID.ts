/**
 * Generates a custom UUID (Universally Unique Identifier) of the specified length.
 *
 * This function creates a custom UUID consisting of uppercase and lowercase letters,
 * and digits. The length of the generated UUID is determined by the input parameter.
 *
 * @function
 * @param {number} length - The length of the custom UUID to be generated.
 * @returns {string} - A string representing the generated custom UUID.
 *
 * @example
 * // Example usage:
 * const uuid = generateCustomUUID(16);
 * console.log(uuid); // Output might be something like: "aB3dEfGhIjKlMnOp"
 *
 * @throws {RangeError} - Throws an error if the input length is not a positive integer.
 */
export function generateCustomUUID(length: number): string {
  if (!Number.isInteger(length) || length <= 0) {
    throw new RangeError("The length must be a positive integer.");
  }

  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
