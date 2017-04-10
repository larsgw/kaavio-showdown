import { manipulatorExtensionGenerator } from './manipulatonExtensionGenerator';
import { parseCommaDelimitedString } from '../../utils/parseCommaDelimitedString';

export const show = manipulatorExtensionGenerator('show', [parseCommaDelimitedString]);
