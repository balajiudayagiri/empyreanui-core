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
