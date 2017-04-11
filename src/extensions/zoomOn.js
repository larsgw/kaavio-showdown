import { manipulatorExtensionGenerator } from '../generators/manipulationExtension';
import { commaDelimitedStringToArrayLikeString } from '../../utils/parseCommaDelimitedString';

export const zoomOn = manipulatorExtensionGenerator(
  'zoomOn',
  [
    {
      function: commaDelimitedStringToArrayLikeString,
      optional: false,
    },
  ]
);
