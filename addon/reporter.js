import $ from 'jquery';

export default class Reporter {
  constructor(runner) {
    this.passes = 0;
    this.failures = 0;

    this.runner = runner;
    this.addEventListeners(runner);
  }

  addEventListeners(runner) {
    // TODO: Generalize this to avoid duplication
    runner.on('suite', this.onSuite.bind(this));
    runner.on('pass', this.onPass.bind(this));
    runner.on('fail', this.onFail.bind(this));
  }

  onSuite() {
    this.$mocha = $('#mocha');
    this.setupDOM();
  }

  onPass() {
    this.passes++;

    this.updateDOM(() => {
      this.$mocha.find('.stats .passes').text(this.passes);
    });
  }

  onFail() {
    this.failures++;

    this.updateDOM(() => {
      this.$mocha.find('.stats .failures').text(this.failures);
    });
  }

  setupDOM() {
    this.$stats = $('<div class="stats"></div>');

    this.$passes = $(`<div class="passes">${this.passes}</div>`);
    this.$failures = $(`<div class="failures">${this.failures}</div>`);

    this.$stats.append(this.$passes, this.$failures);
    this.$mocha.append(this.$stats);
  }

  updateDOM(update) {
    if (!this.$mocha) {
      return;
    }

    update();
  }
}
