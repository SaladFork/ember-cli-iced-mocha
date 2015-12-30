import Ember from 'ember';
import $ from 'jquery';

export default function() {
  // FIXME: We shouldn't need these, but page objects assume these are available
  // globally
  window.find = function(selector, context) {
    return $(selector, context);
  };
  window.findWithAssert = function(selector, context) {
    const $el = $(selector, context);

    if ($el.length === 0) {
      throw new Ember.Error(`Element ${selector} not found.`);
    }

    return $el;
  };
}
