export default class Reporter {
  constructor(runner) {
    this.passes = 0;
    this.failures = 0;

    this.runner = runner;
    this.addEventListeners(runner);
  }

  addEventListeners(runner) {
    // TODO: Generalize this to avoid duplication
    runner.on('pass', this.onPass.bind(this));
    runner.on('fail', this.onFail.bind(this));
  }

  onPass() {
    this.passes++;
  }

  onFail() {
    this.failures++;
  }
}
