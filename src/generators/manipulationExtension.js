import { normalize } from '../../utils/normalize';

/**
 * Build up the Regex string, enabling multiple (optional) parameters
 * Finds e.g.: [some text]!!manipulationName 'param1' 'param2' 'optionalParam1'...!!
 * Note: Just export this for unit testing
 * @param manipulationName
 * @param requiredNumber {{number}} - The number of required params in the regex query.
 * @param optionalNumber {{number}} - The number of optional params.
 * @returns {RegExp}
 */
export const getRegex = (manipulationName, requiredNumber, optionalNumber) => {
  const requiredParamRegex = '[ \\t]*?\'(.+?(?:\\(.*?\\).*?)?)\''
    .repeat(requiredNumber);
  const optionalParamRegex = '(?:[ \\t]*?\'(.+?(?:\\(.*?\\).*?)?)\')?'.repeat(optionalNumber);
  const regexString = normalize(`\\[((?:\\[[^\\]]*|[^\\[\\]])*)\\]!![ \\t]*${manipulationName}
    ${requiredParamRegex}${optionalParamRegex}
    [ \\t]*?!!`);
  return new RegExp(regexString, 'g');
};

/**
 * Get the params required in the onclick event of the output HTML anchor.
 * @param paramValues - Array of values to carry out each function on
 * @param paramFunctions {{function: (function(string): string), optional: boolean}}
 * @returns {*}
 */
const getOnClickParams = (paramValues, paramFunctions) => {
  // Don't return null or undefined since shouldn't show that in the params
  if (paramValues.length < 1 || paramFunctions.length < 1) return '';
  // No need to loop through when only one
  if (paramValues.length === 1 || paramFunctions.length === 1) {
    return paramFunctions[0].function(paramValues[0]);
  }
  return paramValues
    .filter(val => val) // Filter out any that have no value. Happens for optional groups
    .reduce((acc, val, index, arr) => {
      let toReturn = `${acc}${paramFunctions[index].function(val)}`;
      if (index !== arr.length - 1) toReturn = toReturn.concat(',');
      return toReturn;
    }, '');
};

/**
 * Checks that there are not required functions after the optional functions.
 * @param paramFunctions {{function: (function(string): string), optional: boolean}}
 * @returns {*|boolean}
 */
const checkOptionalAtEnd = (paramFunctions) =>
  paramFunctions.every((val, index, arr) => {
    if (index === 0) return true;
    const prev = arr[index - 1];
    return !(prev.optional && !val.optional);
  });


/**
 * @param manipulationName name of the manipulation API method to perform. E.g. highlightOn
 * @param paramFunctions {{function: (function(string): string), optional: boolean}}
 * Each function will be carried out in order. So the 0th function will be called
 * for 'param1' and the 1st for 'param2' in the markdown
 * [text]!!zoomOn 'param1' 'param2'!!
 * @returns {{type: string, filter: (function(*): (*|XML|void|string))}}
 */
export const manipulatorExtensionGenerator = (manipulationName, paramFunctions = []) => {
  if (! checkOptionalAtEnd(paramFunctions)) {
    throw new Error('Optional functions must be after the required ones.');
  }
  const requiredNumber = paramFunctions.filter(param => ! param.optional).length;
  const optionalNumber = paramFunctions.filter(param => param.optional).length;
  const regex = getRegex(manipulationName, requiredNumber, optionalNumber);
  return {
    type: 'lang',
    filter: text =>
      text.replace(regex,
        (match, innerText, ...p) => {
          p.pop(); // Remove offset
          p.pop(); // Remove string
          const onclickMethod = normalize(`diagram.manipulator.${manipulationName}(
          ${getOnClickParams(p, paramFunctions)})`);

          return (
            `<a onclick="${onclickMethod}">${innerText}</a>`
          );
        }),
  };
};
