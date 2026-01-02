export function makeDescription(
  markdown: string,
  params?: { maxLength: number },
): string {
  const { maxLength = 160 } = params || {};

  const plainText = markdown
    // remove import statements
    .replace(/^import\s.*from.*;$/gm, "")
    // sanitize html tags
    .replace(/<[^>]*>?/gm, "");

  return plainText.length > maxLength
    ? `${plainText.slice(0, maxLength - 3)}...`
    : plainText;
}
