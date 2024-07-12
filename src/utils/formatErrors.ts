/**
 * Formats error messages based on a predefined error map.
 *
 * This function takes a comma-separated string of error messages in the format
 * "key: message" and maps each key to a more user-friendly error message based
 * on a predefined error map. If a key does not exist in the error map, it uses
 * the provided message. The resulting error messages are joined by newline characters.
 *
 * @function
 * @param {string} errorMessages - A comma-separated string of error messages in the format "key: message".
 * @returns {string} - A string of user-friendly error messages joined by newline characters.
 *
 * @example
 * // Example usage:
 * const formattedErrors = formatErrors("user.firstName: , code.htmlCode: ");
 * console.log(formattedErrors);
 * // Output:
 * // "First Name is required.
 * // HTML Code is required."
 */
export const formatErrors = (errorMessages: string): string => {
  const errorMap: { [key: string]: string } = {
    "user.firstName": "First Name is required.",
    "user.lastName": "Last Name is required.",
    "code.htmlCode": "HTML Code is required.",
    "code.cssCode": "CSS Code is required if you select CSS as the framework.",
    "code.tailwindCode":
      "Tailwind Code is required if you select Tailwind as the framework.",
  };

  const errors = errorMessages.split(",").map((error) => {
    const [key, message] = error.split(":");
    const trimmedKey = key.trim();
    return errorMap[trimmedKey] || message.trim();
  });

  return errors.join("\n");
};
