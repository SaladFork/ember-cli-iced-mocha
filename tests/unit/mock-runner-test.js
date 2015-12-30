import {
  beforeEach,
  describe,
  context,
  it,
} from 'mocha';

import { expect } from 'chai';

import MockRunner from '../helpers/mock-runner';

describe('Unit: Mock Runner', function() {

  let runner;
  beforeEach(function() {
    runner = new MockRunner();
  });

  context('when a listener is added for an event', function() {

    let foo;
    beforeEach(function() {
      foo = null;
      runner.on('foo', (arg) => foo = arg);
    });

    context('and trigger is called for that event', function() {

      beforeEach(function() {
        runner.trigger('foo', 'called');
      });

      it('should call the listener with the provided arguments', function() {
        expect(foo).to.equal('called');
      });

    });

  });

});
