import { manipulatorExtensionGenerator } from '../generators/manipulationExtension';
import { parseCommaDelimitedString } from '../../utils/parseCommaDelimitedString';

export const toggleHighlight = manipulatorExtensionGenerator(
  'toggleHighlight',
  [parseCommaDelimitedString, (input) => `'${input}'`]
);

