import { manipulatorExtensionGenerator } from '../generators/manipulationExtension';
import { commaDelimitedStringToArrayLikeString } from '../../utils/parseCommaDelimitedString';

export const show = manipulatorExtensionGenerator(
  'show',
  [
    {
      function: commaDelimitedStringToArrayLikeString,
      optional: false,
    },
  ]
);
