import * as assert from 'assert';
import fs from 'fs';
import * as Showdown from 'showdown';
import * as extensions from '../src/extensions';
import 'should';

// Normalize input/output
const normalize = (testCase) => {
  return testCase
    // Normalize line returns
    .replace(/\r/g, '')
    // Ignore all leading/trailing whitespace
    .split('\n').map((x) => x.trim()).join('\n')
    // Put all on one line
    .replace(/\r?\n|\r/g, '')
    // Remove extra lines
    .trim();
};

describe('CustomMarkdown', () => {

  describe('Extensions', () => {
    const cases = fs.readdirSync(`${__dirname}/extensions/`)
      .filter(file => file.slice(-3) === '.md')
      .map(file => {
        const name = file.replace('.md', '');
        const dir = `${__dirname}/extensions/`;
        const htmlPath = `${dir}${name}.html`;
        const mdPath = `${dir}${name}.md`;

        return {
          name,
          HTML: fs.readFileSync(htmlPath, 'utf8'),
          markdown: fs.readFileSync(mdPath, 'utf8'),
        };
      });

    cases.forEach(singleCase => {
      it(`should map to an extension file for ${singleCase.name}`, () => {
        return extensions.should.have.ownProperty(singleCase.name);
      });

      it(`should convert correctly for the ${singleCase.name} extension`, () => {
        const extensionFactory = () => [extensions[singleCase.name]];
        Showdown.extension(singleCase.name, extensionFactory);
        const converter = new Showdown.Converter({
          extensions: [singleCase.name],
        });
        const output = converter.makeHtml(singleCase.markdown);
        assert.equal(
          normalize(output),
          normalize(singleCase.HTML));
      });
    });
  });
});
