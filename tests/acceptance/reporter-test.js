import {
  afterEach,
  beforeEach,
  context,
  describe,
  it,
} from 'mocha';

import { expect } from 'chai';

import MockRunner from '../helpers/mock-runner';

import Reporter from 'ember-cli-iced-mocha/reporter';

import TestPage from '../pages/test-page';

import helperShim from '../pages/helper-shim';

describe('Acceptance: Reporter', function() {

  // FIXME: Page Objects don't play nice without global helpers injected
  helperShim();

  let reporter, runner;
  beforeEach(function() {
    runner = new MockRunner();
    reporter = new Reporter(runner);
  });

  afterEach(function() {
    TestPage.reset();
  });

  describe('Stats', function() {

    context('after starting a test suite', function() {

      beforeEach(function() {
        runner.trigger('suite');
      });

      it('should start with 0 passes', function() {
        expect(TestPage.passes()).to.equal('0');
      });

      it('should start with 0 failures', function() {
        expect(TestPage.failures()).to.equal('0');
      });

    });

  });

});
