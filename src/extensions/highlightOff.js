import { manipulatorExtensionGenerator } from '../generators/manipulationExtension';
import {
  commaDelimitedStringToArray,
  commaDelimitedStringToArrayLikeString,
} from '../../utils/parseCommaDelimitedString';
import { generateObjectString } from '../../utils/generateObjectString';

/**
 * Enables syntax like:
 * [some text]!!highlightOff 'entity list' 'reset list'!!
 * Where entity list is a comma-separated list of entity IDs.
 * Reset list is optional and can include others, hidden, and panZoom.
 */
export const highlightOff = manipulatorExtensionGenerator(
  'highlightOff',
  [
    {
      function: commaDelimitedStringToArrayLikeString,
      optional: false,
    },
    {
      function: input => {
        const arr = commaDelimitedStringToArray(input);
        if (arr.length === 0) return ''; // Just stick with defaults if no resets
        const toReturn = {};
        if (arr.indexOf('others') > -1) {
          toReturn.others = true;
        }
        if (arr.indexOf('hidden') > -1) {
          toReturn.hidden = true;
        }
        if (arr.indexOf('panZoom') > -1) {
          toReturn.panZoom = true;
        }
        return generateObjectString(toReturn);
      },
      optional: true,
    },
  ]
);
