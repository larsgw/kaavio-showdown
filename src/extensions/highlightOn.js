import { manipulatorExtensionGenerator } from '../generators/manipulationExtension';
import { parseCommaDelimitedString } from '../../utils/parseCommaDelimitedString';

export const highlightOn = manipulatorExtensionGenerator(
  'highlightOn',
  [
    {
      function: parseCommaDelimitedString,
      optional: false,
    },
    {
      function: (input) => `'${input}'`,
      optional: false,
    },
  ]
);

