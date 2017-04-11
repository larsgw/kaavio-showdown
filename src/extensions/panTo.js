import { manipulatorExtensionGenerator } from '../generators/manipulationExtension';
import { parseCommaDelimitedString } from '../../utils/parseCommaDelimitedString';

export const panTo = manipulatorExtensionGenerator(
  'panTo',
  [
    {
      function: parseCommaDelimitedString,
      optional: false
    },
  ]
);
