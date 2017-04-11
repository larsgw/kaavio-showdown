import { manipulatorExtensionGenerator } from '../generators/manipulationExtension';
import { parseCommaDelimitedString } from '../../utils/parseCommaDelimitedString';

export const show = manipulatorExtensionGenerator(
  'show',
  [
    {
      function: parseCommaDelimitedString,
      optional: false,
    },
  ]
);
