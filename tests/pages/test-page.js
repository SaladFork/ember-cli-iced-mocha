import PageObject from '../page-object';

let {
  text
} = PageObject;

export default PageObject.create({
  scope: '#mocha',

  // Stats
  passes: text('.stats .passes'),
  failures: text('.stats .failures'),

  reset() {
    if (!this.$page) {
      this.$page = $(this.scope);
    }

    this.$page.empty();
  }
});
