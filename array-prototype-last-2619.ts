declare global {
  interface Array<T> {
    last(): T | -1;
  }
}

Array.prototype.last = function () {
  return this.length === 0 ? -1 : this[this.length - 1];
};

const arr = [1, 2, 3];
console.log(arr.last());

export {};
