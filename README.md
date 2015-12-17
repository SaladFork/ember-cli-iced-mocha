# Ember CLI Iced Mocha

[![Build Status](https://travis-ci.org/SaladFork/ember-cli-iced-mocha.svg?branch=master)](https://travis-ci.org/SaladFork/ember-cli-iced-mocha)

`ember-cli-iced-mocha` is a (work-in-progress!) [Ember](http://www.emberjs.com/) addon for exploring the potential of an improved HTML reporter for [`ember-cli-mocha`](https://github.com/switchfly/ember-cli-mocha).

## Installation

First, install `ember-cli-mocha`:
```
ember install ember-cli-mocha
```

Then, install this addon:
```bash
ember install ember-cli-iced-mocha
```

Next, you'll need to set the test reporter to the one included in this addon:
```javascript
// tests/test-helper.js
import { setResolver } from 'ember-mocha';
import Reporter from 'ember-cli-iced-mocha/reporter';
import resolver from './helpers/resolver';

setResolver(resolver);
window.mocha.reporter((runner) => new Reporter(runner));
```

## Addon Goals

### Short-Term

 * Reach feature parity with the default [Mocha HTML reporter](https://mochajs.org/#html)

### Medium-Term

 * Add a configurable mechanism for grouping automated test results (such as JSHint or JSCS linting)
 * Either automatically extend the consuming app/addon to use a mocha-friendly `testGenerator` function or make it easy for consumers to import one from this addon that will be maintained
 * Add a extensible mechanism for registering options that can be toggled on/off that should be exposed in the UI comparable to QUnit's [`urlConfig` option](https://api.qunitjs.com/QUnit.config/). Include some options such as the ability to hide passing tests and to hide the container. 
 * If it makes sense, consider/discuss merging this repository to `ember-cli-mocha`

### Long-Term
 * Separate out the code for state management of testing data from the UI code. Explore the potential for making the `tests/index.html` page its own Ember app separate from the app under test.

## Contributing
See [`CONTRIBUTING.md`](https://github.com/SaladFork/ember-cli-iced-mocha/blob/master/CONTRIBUTING.md).
