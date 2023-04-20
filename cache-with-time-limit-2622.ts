class TimeLimitedCache {
  store: Record<
    string,
    {
      timeout: any;
      value: any;
    }
  > = {};

  set(key: number, value: number, duration: number): boolean {
    const result = !!(this.store[key]?.value && this.store[key]?.value !== -1);

    clearTimeout(this.store[key]?.timeout);

    this.store[key] = {
      timeout: setTimeout(() => {
        this.store[key].value = -1;
      }, duration),
      value,
    };

    return result;
  }

  get(key: number): number {
    return this.store[key]?.value || -1;
  }

  count(): number {
    let result = 0;

    for (const key in this.store) {
      if (this.store[key].value !== -1) {
        result++;
      }
    }

    return result;
  }
}
