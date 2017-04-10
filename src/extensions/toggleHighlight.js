import { manipulatorExtensionGenerator } from './manipulatonExtensionGenerator';
import { parseCommaDelimitedString } from '../../utils/parseCommaDelimitedString';

export const toggleHighlight = manipulatorExtensionGenerator(
  'toggleHighlight',
  [parseCommaDelimitedString, (input) => `'${input}'`]
);

