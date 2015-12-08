import {
  beforeEach,
  describe,
  it,
} from 'mocha';

import { expect } from 'chai';

import Reporter from 'ember-cli-iced-mocha/reporter';

describe('Reporter', function() {

  let reporter;
  beforeEach(function() {
    reporter = new Reporter();
  });

  it('should start with 0 passing tests and 0 failing tests', function() {
    expect(reporter.passes).to.equal(0);
    expect(reporter.failures).to.equal(0);
  });

});
