import { manipulatorExtensionGenerator } from '../generators/manipulationExtension';
import { parseCommaDelimitedString } from '../../utils/parseCommaDelimitedString';

export const toggleHighlight = manipulatorExtensionGenerator(
  'toggleHighlight',
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

