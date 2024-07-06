export function extractId(urlFriendlyString: string): string {
  // Split the string by hyphens
  const parts = urlFriendlyString.split("-");
  // Return the last part as the ID
  return parts[parts.length - 1];
}
