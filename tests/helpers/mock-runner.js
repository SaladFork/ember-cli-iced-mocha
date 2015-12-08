export default class MockRunner {
  constructor() {
    this.eventListeners = {};
  }

  on(event, callback) {
    const listeners = this._listenersForEvent(event);
    listeners.push(callback);
  }

  trigger(event, ...args) {
    const listeners = this._listenersForEvent(event);
    listeners.forEach((listener) => listener(...args));
  }

  _listenersForEvent(event) {
    let listeners = this.eventListeners[event];

    if (!listeners) {
      this.eventListeners[event] = [];
    }

    return this.eventListeners[event];
  }
}
