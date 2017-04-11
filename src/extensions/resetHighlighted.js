import { manipulatorExtensionGenerator } from '../generators/manipulationExtension';

/**
 * Enables syntax like:
 * [some text]!!resetHighlighted!!
 */
export const resetHighlighted = manipulatorExtensionGenerator('resetHighlighted');
