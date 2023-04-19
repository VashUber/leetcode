type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
  return async function (...args) {
    return new Promise((res, rej) => {
      const timeout = setTimeout(() => rej("Time Limit Exceeded"), t);
      fn(...args).then((v) => {
        res(v);
        clearTimeout(timeout);
      }, rej);
    });
  };
}
