import { manipulatorExtensionGenerator } from './manipulatonExtensionGenerator';
import { parseCommaDelimitedString } from '../../utils/parseCommaDelimitedString';

export const highlightOff = manipulatorExtensionGenerator(
  'highlightOff',
  [parseCommaDelimitedString]
);