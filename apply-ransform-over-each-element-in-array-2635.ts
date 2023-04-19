function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  return arr.reduce((prev, curr, idx) => {
    prev.push(fn(curr, idx));
    return prev;
  }, [] as number[]);
}
