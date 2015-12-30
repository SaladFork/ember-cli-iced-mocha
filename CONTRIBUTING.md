# Contributing

## Setup

* `git clone` this repository
* `npm install`
* `bower install`

## Tests

Tests are written in [Mocha](http://mochajs.org/) using the BDD approach described in Charles Lowell's [Mocha is Born for BDD](https://vimeo.com/146960282) talk.

Note that it is intentional that this addon's tests do not use the included reporter. While it would be great for this addon to be "self-hosting," it would also compromise the validity of the test output.

### Running Tests

* `ember test`
* `ember test --server`
* `npm test` (Runs `ember try:testall` to test the addon against multiple Ember versions)

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
