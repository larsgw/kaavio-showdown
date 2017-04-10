import { normalize } from '../../utils/normalize';

/**
 * Buld up the Regex string, enabling multiple parameters
 * Finds e.g.: [some text]!!manipulationName 'param1' 'param2' 'param3'...!!
 * Note: Just export this for unit testing
 * @param manipulationName
 * @param paramNumber - The number of params in the regex query. So in the example the number of 'param[n]'s
 * @returns {RegExp}
 */
export const getRegex = (manipulationName, paramNumber) => {
  const paramRegex = '[ \\t]*?\'(.+?(?:\\(.*?\\).*?)?)\''.repeat(paramNumber);
  const regexString = normalize(`\\[((?:\\[[^\\]]*|[^\\[\\]])*)\\]!![ \\t]*${manipulationName}
    ${paramRegex}
    [ \\t]*?!!`);
  return new RegExp(regexString, 'g');
};

/**
 * Get the params required in the onclick event of the output HTML anchor.
 * Each function will be carried out in order. So the 0th function will be called
 * for the 0th value.
 * @param paramValues - Array of values to carry out each function on
 * @param paramFunctions - Array of functions to carry out on each param value.
 * @returns {*}
 */
const getOnClickParams = (paramValues, paramFunctions) => {
  // Don't return null or undefined since shouldn't show that in the params
  if (paramValues.length < 1 || paramFunctions.length < 1) return '';
  // No need to loop through when only one
  if (paramValues.length === 1 || paramFunctions.length === 1) {
    return paramFunctions[0](paramValues[0]);
  }
  return paramValues.reduce((acc, val, index, arr) => {
    let toReturn = `${acc}${paramFunctions[index](val)}`;
    if (index !== arr.length - 1) toReturn = toReturn.concat(',');
    return toReturn;
  }, '');
};

/**
 * @param manipulationName name of the manipulation API method to perform. E.g. highlightOn
 * @param paramFunctions - Array of functions to carry out on each param value.
 * Each function will be carried out in order. So the 0th function will be called
 * for 'param1' and the 1st for 'param2' in the markdown
 * [text]!!zoomOn 'param1' 'param2'!!
 * @returns {{type: string, filter: (function(*): (*|XML|void|string))}}
 */
export const manipulatorExtensionGenerator = (manipulationName, paramFunctions) => {
  const paramNumber = paramFunctions ? paramFunctions.length : 0;
  const regex = getRegex(manipulationName, paramNumber);
  return {
    type: 'lang',
    filter: (text) =>
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
