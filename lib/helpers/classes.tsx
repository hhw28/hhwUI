function classes(...names: (string | undefined)[]) {
  return names.filter(Boolean).join(" ");
}

interface Options {
  extra: string | undefined;
}
interface ClassToggles {
  [K: string]: boolean;
}
const scopedClassMaker = (prefix: string) => {
  return (name: string | ClassToggles = "", options?: Options) => {
    const nameObject = name instanceof Object ? name : { [name]: name };

    return Object.entries(nameObject)
      .filter(item => item[1] !== false)
      .map(item => item[0])
      .map(name => [prefix, name].filter(Boolean).join("-"))
      .concat((options && options.extra) || [])
      .join(" ");
  };
};

export { scopedClassMaker };

export default classes;
