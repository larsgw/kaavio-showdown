export const arrayToArrayLikeString = (arr) => {
  let entries;
  if (arr.length < 1) {
    throw new Error('Invalid length');
  }
  if (arr.length === 1) {
    entries = `'${arr[0]}'`;
  } else {
    entries = '[';
    arr.forEach((singleEntry, index, array) => {
      entries += `'${singleEntry}'`;
      // Add comma separator if not last index
      if (index !== array.length - 1) entries += ',';
    });
    entries += ']';
  }
  return entries;
};

export const commaDelimitedStringToArray = (commaDelimited) => {
  return commaDelimited.split(/\s*,\s*/);
};

export const commaDelimitedStringToArrayLikeString = (commaDelimited) =>
  arrayToArrayLikeString(commaDelimitedStringToArray(commaDelimited));
