/**
 * Normalize a string input. Removes line returns, leading & trailing space,
 * line breaks and extra lines.
 * @param input
 */
export const normalize = (input) => input
  // Normalize line returns
  .replace(/\r/g, '')
  // Ignore all leading/trailing whitespace
  .split('\n').map((x) => x.trim()).join('\n')
  // Put all on one line
  .replace(/\r?\n|\r/g, '')
  // Remove extra lines
  .trim();
