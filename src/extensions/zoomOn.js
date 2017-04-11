import { manipulatorExtensionGenerator } from '../generators/manipulationExtension';
import { parseCommaDelimitedString } from '../../utils/parseCommaDelimitedString';

export const zoomOn = manipulatorExtensionGenerator(
  'zoomOn',
  [
    {
      function: parseCommaDelimitedString,
      optional: false,
    },
  ]
);
