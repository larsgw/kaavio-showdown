import { manipulatorExtensionGenerator } from './manipulatonExtensionGenerator';
import { parseCommaDelimitedString } from '../../utils/parseCommaDelimitedString';

export const hide = manipulatorExtensionGenerator('hide', [parseCommaDelimitedString]);
