import { manipulatorExtension } from './manipulatorExtension';
import { parseCommaDelimitedString } from '../../utils/parseCommaDelimitedString';

export const highlightOff = manipulatorExtension(
  'highlightOff',
  [parseCommaDelimitedString]
);
