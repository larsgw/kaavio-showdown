/**
 * Parse a comma delimited string into an array of strings
 * @param commaDelimited
 * @returns {*}
 */
export const parseCommaDelimitedString = (commaDelimited) => {
  const split = commaDelimited.split(/\s*,\s*/);
  let entries;
  if (split.length < 2) {
    entries = `'${split}'`;
  } else {
    entries = '[';
    split.forEach((singleEntry, index, array) => {
      entries += `'${singleEntry}'`;
      // Add comma separator if not last index
      if (index !== array.length - 1) entries += ',';
    });
    entries += ']';
  }
  return entries;
};
