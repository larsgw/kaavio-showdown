import { manipulatorExtensionGenerator } from '../generators/manipulationExtension';
import { parseCommaDelimitedString } from '../../utils/parseCommaDelimitedString';

export const highlightOn = manipulatorExtensionGenerator(
  'highlightOn',
  [parseCommaDelimitedString, (input) => `'${input}'`]
);

