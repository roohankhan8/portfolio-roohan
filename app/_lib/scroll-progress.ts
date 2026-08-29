function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function getScrollProgress(
  documentHeight: number,
  viewportHeight: number,
  scrollY: number,
): number {
  const maxScroll = documentHeight - viewportHeight;

  if (maxScroll <= 0) {
    return 0;
  }

  return clamp(scrollY / maxScroll, 0, 1);
}
