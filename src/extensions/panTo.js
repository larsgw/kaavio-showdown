import { manipulatorExtensionGenerator } from '../generators/manipulationExtension';
import { commaDelimitedStringToArrayLikeString } from '../../utils/parseCommaDelimitedString';

export const panTo = manipulatorExtensionGenerator(
  'panTo',
  [
    {
      function: commaDelimitedStringToArrayLikeString,
      optional: false
    },
  ]
);
