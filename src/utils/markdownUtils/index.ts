const MAX_DESCRIPTION_LENGTH = 160;

export function makeDescription(markdown: string): string {
  const plainText = markdown
    // sanitize html tags
    .replace(/<[^>]*>?/gm, "");
  return plainText.length > MAX_DESCRIPTION_LENGTH
    ? `${plainText.slice(0, MAX_DESCRIPTION_LENGTH - 3)}...`
    : plainText;
}
