function jsonStringify(object: any): string {
  if (typeof object === "object" && object !== null && !Array.isArray(object)) {
    const arr = Object.keys(object)
      .map((key) => `"${key}":${jsonStringify(object[key])}`)
      .join(",");

    return `{${arr}}`;
  }

  if (Array.isArray(object)) {
    const arr = object.map((elem) => jsonStringify(elem)).join(",");
    return `[${arr}]`;
  }

  if (typeof object === "string") {
    return `"${object}"`;
  }

  return object + "";
}
