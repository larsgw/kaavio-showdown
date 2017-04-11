import { manipulatorExtensionGenerator } from '../generators/manipulationExtension';
import { commaDelimitedStringToArrayLikeString } from '../../utils/parseCommaDelimitedString';

export const highlightOn = manipulatorExtensionGenerator(
  'highlightOn',
  [
    {
      function: commaDelimitedStringToArrayLikeString,
      optional: false,
    },
    {
      function: (input) => `'${input}'`,
      optional: false,
    },
  ]
);

