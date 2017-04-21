import * as assert from 'assert';
import { getShowdown } from '../src';
import 'should';

describe('CustomMarkdown', () => {
  // Don't really need a proper Kaavio instance;
  const showdown = getShowdown({ kaavio: 'just testing' });
  const extensions = showdown.getAllExtensions();
  it('should have extensions registered under kaavio', () =>
    extensions.should.have.ownProperty('kaavio')
  );
  it('should have the correct number of extensions registered', () => {
    assert.equal(extensions.kaavio.length, 1);
  });
});
