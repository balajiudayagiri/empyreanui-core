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
