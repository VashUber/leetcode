function curry(fn: Function): Function {
  let length = fn.length;
  const arr: number[] = [];

  return function curried(...args: number[]) {
    length -= args.length;
    arr.push(...args);
    if (length === 0) {
      return fn(...arr);
    }

    return curried;
  };
}

function sum(a: number, b: number) {
  return a + b;
}
const csum = curry(sum);
console.log(csum(1)(2));
