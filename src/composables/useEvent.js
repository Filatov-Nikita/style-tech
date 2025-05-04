export default function() {
  let callbacks = [];

  function on(fn, { once = false } = {}) {
    callbacks.push({
      fn,
      once,
    });
  }

  function off(fn) {
    callbacks = callbacks.filter(callback => {
      return callback !== fn;
    });
  }

  function trigger(data) {
    callbacks.forEach(callback => {
      callback.fn(data);
    });

    removeOnceEvents();
  }

  function removeOnceEvents() {
    callbacks = callbacks.filter(callback => {
      return !callback.once;
    });
  }

  function removeAll() {
    callbacks = [];
  }

  return {
    callbacks,
    on,
    off,
    trigger,
    removeAll,
  }
}
