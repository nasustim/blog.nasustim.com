export const toPlainText = (markdown: string): string =>
	markdown.replace(/<[^>]*>?/gm, "");
