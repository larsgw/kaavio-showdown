import * as assert from 'assert';
import { getShowdown } from '../src';
import 'should';

describe('CustomMarkdown', () => {
  const showdown = getShowdown({}); // Don't really need a Kaavio instance;
  const extensions = showdown.getAllExtensions();
  it('should have extensions registered under kaavio', () => {
    extensions.should.have.ownProperty('kaavio');
  });
  it('should have the correct number of extensions registered', () => {
    assert.equal(extensions.kaavio.length, 12);
  });
});
