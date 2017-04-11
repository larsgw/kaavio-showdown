import { manipulatorExtensionGenerator } from '../generators/manipulationExtension';
import { commaDelimitedStringToArrayLikeString } from '../../utils/parseCommaDelimitedString';

export const hide = manipulatorExtensionGenerator(
  'hide',
  [
    {
      function: commaDelimitedStringToArrayLikeString,
      optional: false,
    },
  ]
);
