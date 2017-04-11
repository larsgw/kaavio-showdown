import { manipulatorExtensionGenerator, getRegex } from
  '../src/generators/manipulationExtension';
import * as assert from 'assert';
import * as Showdown from 'showdown';
import { normalize } from '../utils/normalize';

describe('manipulatorExtensionGenerator', () => {
  it('should have a RegEx string with no extra params', () => {
    const regex = getRegex('test');
    const shouldBe = '\\[((?:\\[[^\\]]*|[^\\[\\]])*)\\]!![ \\t]*test[ \\t]*?!!';

    assert.equal(regex.source, shouldBe);
  });
  it('should have a RegEx string with two extra required params', () => {
    const regex = getRegex('test', 2);
    const shouldBe = '\\[((?:\\[[^\\]]*|[^\\[\\]])*)\\]!![ \\t]*test' +
      '[ \\t]*?\'(.+?(?:\\(.*?\\).*?)?)\'' +
      '[ \\t]*?\'(.+?(?:\\(.*?\\).*?)?)\'' +
      '[ \\t]*?!!';

    assert.equal(regex.source, shouldBe);
  });
  it('should have a RegEx string with one required param and one optional param', () => {
    const regex = getRegex('test', 1, 1);
    const shouldBe = '\\[((?:\\[[^\\]]*|[^\\[\\]])*)\\]!![ \\t]*test' +
      '[ \\t]*?\'(.+?(?:\\(.*?\\).*?)?)\'' +
      '(?:[ \\t]*?\'(.+?(?:\\(.*?\\).*?)?)\')?' +
      '[ \\t]*?!!';

    assert.equal(regex.source, shouldBe);
  });
  it('should have a RegEx string with only two optional params', () => {
    const regex = getRegex('test', 0, 2);
    const shouldBe = '\\[((?:\\[[^\\]]*|[^\\[\\]])*)\\]!![ \\t]*test' +
      '(?:[ \\t]*?\'(.+?(?:\\(.*?\\).*?)?)\')?' +
      '(?:[ \\t]*?\'(.+?(?:\\(.*?\\).*?)?)\')?' +
      '[ \\t]*?!!';

    assert.equal(regex.source, shouldBe);
  });
  it('should have a global flag', () => {
    const regex = getRegex('test');
    assert.equal(regex.flags, 'g');
  });
  it('should have a lang type', () => {
    const ext = manipulatorExtensionGenerator('test');
    assert.equal(ext.type, 'lang');
  });
  it('should replace this markdown syntax correctly', () => {
    const ext = manipulatorExtensionGenerator('test');
    const markdown = '[some text]!!test!!';
    const HTML = '<p><a onclick="diagram.manipulator.test()">some text</a></p>';
    Showdown.extension('test', [ext]);
    const converter = new Showdown.Converter({
      extensions: ['test'],
    });
    const output = converter.makeHtml(markdown);
    assert.equal(normalize(output), normalize(HTML));
  });
});
