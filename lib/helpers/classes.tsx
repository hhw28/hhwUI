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
  return function x(name?: string | ClassToggles, options?: Options) {
    let result;
    let name2;
    if (typeof name === "string" || name === undefined) {
      result = [prefix, name].filter(Boolean).join("-");
    } else {
      name2 = Object.entries(name)
        .filter(item => item[1])
        .map(item => item[0]);

      result = name2
        .map(item => {
          return [prefix, item].filter(Boolean).join("-");
        })
        .join(" ");
    }

    if (options && options.extra) {
      return [result, options.extra].join(" ");
    } else {
      return result;
    }
  };
}

export { scopedClassMaker };

export default classes;
