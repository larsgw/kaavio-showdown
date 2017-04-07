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

export const CustomMarkdown = Showdown.extensions('Kaavio', ManipulationAPIExtensions);
