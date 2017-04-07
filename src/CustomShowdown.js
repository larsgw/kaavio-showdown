/**
 * kaavio-markdown
 *
 * Copyright © 2016 Jacob Windsor. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import * as Showdown from 'showdown';
import { ManipulationAPIExtensions } from './extensions';

const window = {};
/**
 * Factory function that returns Showdown with the registered extension(s).
 * Also add the specified KaavioInstance to the window as window.diagram.
 * @param KaavioInstance
 * @returns {*}
 */
export const getShowdown = (KaavioInstance) => {
  window.diagram = KaavioInstance;
  Showdown.extension('Kaavio', ManipulationAPIExtensions);
  return Showdown;
};
