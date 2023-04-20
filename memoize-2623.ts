type Fn = (...params: any) => any;

function memoize(fn: Fn): Fn {
  const map = new Map();

  return function (...args) {
    const mem = map.get(args.join());
    if (mem !== undefined) return mem;

    const val = fn(...args);
    map.set(args.join(), val);

    return val;
  };
}
