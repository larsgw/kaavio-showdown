import { manipulatorExtensionGenerator } from '../generators/manipulationExtension';
import { parseCommaDelimitedString } from '../../utils/parseCommaDelimitedString';

export const highlightOff = manipulatorExtensionGenerator(
  'highlightOff',
  [parseCommaDelimitedString]
);
