export function getIndexPagePath (index: number): string {
  return index === 0 ? "/" : `/p/${index + 1}`
}