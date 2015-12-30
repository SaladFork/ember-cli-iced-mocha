import {
  beforeEach,
  describe,
  context,
  it,
} from 'mocha';

import { expect } from 'chai';

import MockRunner from '../helpers/mock-runner';

import Reporter from 'ember-cli-iced-mocha/reporter';

describe('Unit: Reporter', function() {

  let reporter, runner;
  beforeEach(function() {
    runner = new MockRunner();
    reporter = new Reporter(runner);
  });

  it('should start with 0 passing tests and 0 failing tests', function() {
    expect(reporter.passes).to.equal(0);
    expect(reporter.failures).to.equal(0);
  });

  context('when a test passes', function() {

    beforeEach(function() {
      runner.trigger('pass');
    });

    it('should increment the passed tests count', function() {
      expect(reporter.passes).to.equal(1);
    });

  });

  context('when a test fails', function() {

    beforeEach(function() {
      runner.trigger('fail');
    });

    it('should increment the failed tests count', function() {
      expect(reporter.failures).to.equal(1);
    });

  });

});
