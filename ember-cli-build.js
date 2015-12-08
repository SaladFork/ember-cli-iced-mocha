/* jshint node:true */
/* global require, module */
/* jscs:disable */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    jscsOptions: {
      testGenerator: testGenerator
    }
    // Add options here
  });

  /*
    This build file specifes the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};

function testGenerator(relativePath, errors) {
  if (errors) {
    errors = '\\n' + this.escapeErrorString(errors);
  }

  var expectString = relativePath + ' should pass JSCS' + errors;

  return [
    'describe("JSCS - ' + relativePath + '", function () {',
      'it("should pass jscs", function () {',
        'expect(' + !errors + ', "' + expectString + '").to.be.ok;',
      '});',
    '});'
  ].join('\n');
}
