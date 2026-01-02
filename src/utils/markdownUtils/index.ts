const MAX_DESCRIPTION_LENGTH = 160;

export function toPlainText(markdown: string): string {
  return markdown
    // remove import statements
    .replace(/^import\s.*from.*;$/gm, "")
    // sanitize html tags
    .replace(/<[^>]*>?/gm, "");
}

export function makeDescription(markdown: string): string {
  const plainText = toPlainText(markdown);
  return plainText.length > MAX_DESCRIPTION_LENGTH
    ? `${plainText.slice(0, MAX_DESCRIPTION_LENGTH - 3)}...`
    : plainText;
}
