import { manipulatorExtensionGenerator } from './manipulatonExtensionGenerator';
import { parseCommaDelimitedString } from '../../utils/parseCommaDelimitedString';

export const toggleHidden = manipulatorExtensionGenerator(
  'toggleHidden',
  [parseCommaDelimitedString]
);

