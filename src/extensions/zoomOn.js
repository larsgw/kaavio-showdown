import { manipulatorExtensionGenerator } from './manipulatonExtensionGenerator';
import { parseCommaDelimitedString } from '../../utils/parseCommaDelimitedString';

export const zoomOn = manipulatorExtensionGenerator('zoomOn', [parseCommaDelimitedString]);
