function debounce(func, delay) {
  let timer;
  return function () {
    // Whenever debounced function is called, previous timer is cleared.
    clearTimeout(timer);
    // New timer is set. After 'delay',
    timer = setTimeout(() => {
      timer = null;
      func.apply(this, arguments);
    }, delay);
  };
}

export default debounce;
