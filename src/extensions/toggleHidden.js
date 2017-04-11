import { manipulatorExtensionGenerator } from '../generators/manipulationExtension';
import { commaDelimitedStringToArrayLikeString } from '../../utils/parseCommaDelimitedString';

export const toggleHidden = manipulatorExtensionGenerator(
  'toggleHidden',
  [
    {
      function: commaDelimitedStringToArrayLikeString,
      optional: false,
    },
  ]
);

