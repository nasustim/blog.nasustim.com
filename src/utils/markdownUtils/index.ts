export function makeDescription(markdown: string, maxLength?: number): string {
  const plainText = markdown
    // remove import statements
    .replace(/^import\s.*from.*;$/gm, "")
    // sanitize html tags
    .replace(/<[^>]*>?/gm, "");

  if (maxLength === undefined) {
    return plainText;
  }

  return plainText.length > maxLength
    ? `${plainText.slice(0, maxLength - 3)}...`
    : plainText;
}

export function toPlainText(markdown: string): string {
  return makeDescription(markdown);
}
