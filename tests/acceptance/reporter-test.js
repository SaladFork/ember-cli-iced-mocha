import {
  afterEach,
  beforeEach,
  describe
} from 'mocha';

import MockRunner from '../helpers/mock-runner';

import Reporter from 'ember-cli-iced-mocha/reporter';

describe('Acceptance: Reporter', function() {

  const $mocha = $('#mocha');

  let reporter, runner;
  beforeEach(function() {
    runner = new MockRunner();
    reporter = new Reporter(runner);
  });

  afterEach(function() {
    $mocha.empty();
  });

});
