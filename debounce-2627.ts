type F = (...p: any[]) => any;

function debounce(fn: F, t: number): F {
  let timeout: any; // can't use NodeJs.Timeout

  return function (...args) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      fn(...args);
    }, t);
  };
}
