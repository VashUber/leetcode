function filter(arr: number[], fn: (n: number, i: number) => any): number[] {
  const res: number[] = [];

  arr.forEach((elem, idx) => {
    if (fn(elem, idx)) {
      res.push(elem);
    }
  });

  return res;
}
