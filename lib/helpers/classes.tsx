function classes(...names: (string | undefined)[]) {
  return names.filter(Boolean).join(" ");
}

interface Options {
  extra: string | undefined;
}
interface ClassToggles {
  [K: string]: boolean;
}
function scopedClassMaker(prefix: string) {
  return function x(name: string | ClassToggles, options?: Options) {
    const nameObject =
      typeof name === "string" || name === undefined ? { [name]: name } : name;

    const result = Object.entries(nameObject)
      .filter(item => item[1] !== false)
      .map(item => item[0])
      .map(name => [prefix, name].filter(Boolean).join("-"))
      .join(" ");

    if (options && options.extra) {
      return [result, options.extra].join(" ");
    } else {
      return result;
    }
  };
}

export { scopedClassMaker };

export default classes;
