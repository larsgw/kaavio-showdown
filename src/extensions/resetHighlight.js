import { manipulatorExtensionGenerator } from '../generators/manipulationExtension';

/**
 * Enables syntax like:
 * [some text]!!resetHighlight!!
 */
export const resetHighlight = manipulatorExtensionGenerator('resetHighlight');
