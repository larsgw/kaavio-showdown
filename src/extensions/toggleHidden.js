import { manipulatorExtensionGenerator } from '../generators/manipulationExtension';
import {
  commaDelimitedStringToArray,
  commaDelimitedStringToArrayLikeString
} from '../../utils/parseCommaDelimitedString';
import {generateObjectString} from '../../utils/generateObjectString';

export const toggleHidden = manipulatorExtensionGenerator(
  'toggleHidden',
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
        if (arr.indexOf('highlighted') > -1) {
          toReturn.highlighted = true;
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

