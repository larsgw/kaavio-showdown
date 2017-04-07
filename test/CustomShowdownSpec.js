import { getShowdown } from '../src/CustomShowdown';
import * as assert from 'assert';
import fs from 'fs';

// Normalize input/output
const normalize = (testCase) => {
  return testCase
    // Normalize line returns
    .replace(/\r/g, '')
    // Ignore all leading/trailing whitespace
    .split('\n').map((x) => x.trim()).join('\n')
    // Remove extra lines
    .trim()
    // Convert whitespace to a visible character so that it shows up on error reports
    .replace(/ /g, '·')
    .replace(/\n/g, '•\n');
};

describe('CustomMarkdown', () => {
  // Don't really need Kaavio since we are only checking the output HTML
  const mockKaavioInstance = {};
  const showdown = getShowdown(mockKaavioInstance);
  const converter = new showdown.Converter({
    extensions: ['Kaavio'],
  });

  describe('Kaavio', () => {
    it('should return the correct HTML from the markdown', () => {
      const markdown = normalize(fs.readFileSync(`${__dirname}/extensions/Kaavio.md`, 'utf8'));
      const HTML = normalize(fs.readFileSync(`${__dirname}/extensions/Kaavio.html`, 'utf8'));

      const output = converter.makeHtml(markdown);

      assert.equal(output, HTML);
    });
  });
});
