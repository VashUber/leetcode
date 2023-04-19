function curry(fn: Function): Function {
  const arr: number[] = [];

  return function curried(...args: number[]) {
    arr.push(...args);

    if (arr.length === fn.length) {
      return fn(...arr);
    }

    return curried;
  };
}
