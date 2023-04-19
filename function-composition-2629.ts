type F = (x: number) => number;

function compose(functions: F[]): F {
  return function (x) {
    return functions.reduceRight((prev, fn) => {
      return fn(prev);
    }, x);
  };
}
