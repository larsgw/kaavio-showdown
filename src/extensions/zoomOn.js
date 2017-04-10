import { manipulatorExtension } from './manipulatorExtension';
import { parseCommaDelimitedString } from '../../utils/parseCommaDelimitedString';

export const zoomOn = manipulatorExtension('zoomOn', [parseCommaDelimitedString]);
