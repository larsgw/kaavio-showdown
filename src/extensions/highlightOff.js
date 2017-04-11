import { manipulatorExtensionGenerator } from '../generators/manipulationExtension';
import { commaDelimitedStringToArrayLikeString } from '../../utils/parseCommaDelimitedString';

export const highlightOff = manipulatorExtensionGenerator(
  'highlightOff',
  [
    {
      function: commaDelimitedStringToArrayLikeString,
      optional: false,
    },
  ]
);
