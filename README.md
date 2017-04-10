# [kaavio-markdown](https://github.com/jacobwindsor/kaavio-markdown)

[![NPM version](http://img.shields.io/npm/v/kaavio-markdown.svg?style=flat-square)](https://www.npmjs.com/package/kaavio-markdown)
[![NPM downloads](http://img.shields.io/npm/dm/kaavio-markdown.svg?style=flat-square)](https://www.npmjs.com/package/kaavio-markdown)
[![Build Status](http://img.shields.io/travis/jacobwindsor/kaavio-markdown/master.svg?style=flat-square)](https://travis-ci.org/jacobwindsor/kaavio-markdown)
[![Coverage Status](https://img.shields.io/coveralls/jacobwindsor/kaavio-markdown.svg?style=flat-square)](https://coveralls.io/jacobwindsor/kaavio-markdown)
[![Dependency Status](http://img.shields.io/david/jacobwindsor/kaavio-markdown.svg?style=flat-square)](https://david-dm.org/jacobwindsor/kaavio-markdown)

> Extended MardDown syntax for Kaavio and the Manipulation API

### How to Install

```sh
$ npm install kaavio-showdown
```

### Getting Started

This package provides some special Markdown syntax for interacting with Kaavio diagrams. It's built on top of 
[Showdown](https://github.com/showdownjs/showdown/).

Make sure you have Kaavio installed.

```javascript
import {getShowdown} from 'kaavio-showdown';

const kaavioInstance = YOUR_DIAGRAM_INSTANCE;
const showdown = getShowdown(kaavioInstance);
const converter = getShowdown({
  extensions: ['kaavio'] // You may also use other extensions here
});

const markdown = SOME_MARKDOWN TO PARSE;
const HTML = converter.makeHtml();
```

### Developing
Add new extensions to `src/extensions`; All files should be named the same as the function they export. 
Only one exported extension function per file.

Use the `manipulationExtensionGenerator` to help you make extensions.
It returns the [extension object](https://github.com/showdownjs/showdown/wiki/Extensions#creating-showdown-extensions) 
using a RegEx pattern that matches the other extensions. It takes an extension name and an array of functions that 
should be called on each parameter.

The below example will enable syntax like `[some text]!!yourExtensionName 'input'`. This will convert to 
 `<a onclick="diagram.manipulator.yourExtensionName('input')>some text</a>`.

```javascript
import {manipulationExtensionGenerator} from './manipulationExtensionGenerator';

export const yourExtensionName = manipulationExtensionGenerator(
    'yourExtensionName',
    [
        (input) => `'${input}'`
    ]
)
```


### How to Test
To test your extensions simply create a sample MarkDown file in `test/extensions` and a corresponding HTML file that is 
what the MarkDown should convert to. Both files should follow the same name as your extension. The test runner will 
then automatically test the files.

Run one, or a combination of the following commands to lint and test your code:

```sh
$ npm run lint          # Lint the source code with ESLint
$ npm test              # Run unit tests with Mocha
$ npm run test:watch    # Run unit tests with Mocha, and watch files for changes
$ npm run test:cover    # Run unit tests with code coverage by Istanbul
```

### License

MIT © 2016 Jacob Windsor
