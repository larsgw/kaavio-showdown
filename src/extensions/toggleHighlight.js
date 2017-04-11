import { manipulatorExtensionGenerator } from '../generators/manipulationExtension';
import { commaDelimitedStringToArrayLikeString, commaDelimitedStringToArray }
from '../../utils/parseCommaDelimitedString';

/**
 * Enables syntax like:
 * [some text]!!toggleHighlight 'entity list' 'somecolor' 'reset list'!!
 * Where entity list is a comma-separated list of entity IDs.
 * Reset list is optional and can include others, hidden, and panZoom.
 */
export const toggleHighlight = manipulatorExtensionGenerator(
  'toggleHighlight',
  [
    {
      function: commaDelimitedStringToArrayLikeString,
      optional: false,
    },
    {
      function: (input) => `'${input}'`,
      optional: false,
    },
    {
      function: input => {
        const arr = commaDelimitedStringToArray(input);
        if (arr.length === 0) return ''; // Just stick with defaults if no resets
        let toReturn = [];
        if (arr.indexOf('others') > -1) {
          toReturn.push('others: true');
        }
        if (arr.indexOf('hidden') > -1) {
          toReturn.push('hidden: true');
        }
        if (arr.indexOf('panZoom') > -1) {
          toReturn.push('panZoom: true');
        }
        toReturn = toReturn.join(',');
        return `{${toReturn}}`;
      },
      optional: true,
    },
  ]
);

