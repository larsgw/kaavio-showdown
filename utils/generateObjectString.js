/**
 * Generate an object-like string from an object.
 * @param obj
 * @returns {string}
 */
export const generateObjectString = (obj) => {
  const entries = Object.entries(obj);
  let toReturn = [];
  entries.forEach(entry => {
    toReturn.push(`${entry[0]}: ${entry[1]}`);
  });
  toReturn = toReturn.join(',');
  return `{${toReturn}}`;
};
