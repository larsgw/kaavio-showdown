import { manipulatorExtensionGenerator } from './manipulatonExtensionGenerator';
import { parseCommaDelimitedString } from '../../utils/parseCommaDelimitedString';

export const panTo = manipulatorExtensionGenerator('panTo', [parseCommaDelimitedString]);
