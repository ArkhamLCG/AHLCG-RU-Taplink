export function replaceImages(htmlContent: string): string {
  return htmlContent.replace(
    /<img([^>]*)>/g,
    '<div class="image"><img$1></div>',
  );
}
