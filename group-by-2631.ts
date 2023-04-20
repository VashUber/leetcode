declare global {
  interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>;
  }
}

Array.prototype.groupBy = function (fn) {
  const arr = this;
  const res: Record<string, typeof arr[0]> = {};

  for (const elem of this) {
    const key = fn(elem);
    if (res[key]) res[key].push(elem);
    else {
      res[key] = [elem];
    }
  }

  return res;
};

export {};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
