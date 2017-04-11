import { manipulatorExtensionGenerator } from '../generators/manipulationExtension';
import { parseCommaDelimitedString } from '../../utils/parseCommaDelimitedString';

export const toggleHidden = manipulatorExtensionGenerator(
  'toggleHidden',
  [
    {
      function: parseCommaDelimitedString,
      optional: false,
    },
  ]
);

