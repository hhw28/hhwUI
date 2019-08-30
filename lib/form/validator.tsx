import { FormValue } from "./form";

type FormRules = Array<FormRule>;
interface FormRule {
  key: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  validator?: (value: string) => Promise<string>;
}

type OneError = string | Promise<string>;

const validator = (
  Formvalue: FormValue,
  rules: FormRules,
  callback: (error: { [key: string]: string[] }) => void
): void => {
  const errors: { [key: string]: OneError[] } = {};

  const isEmpty = (value: any) => {
    return value === undefined || value === null || value === "";
  };
  const setError = (key: string, error: OneError) => {
    if (isEmpty(errors[key])) {
      errors[key] = [];
    }
    errors[key].push(error);
  };
  rules.map(rule => {
    const value = Formvalue[rule.key];
    if (rule.validator) {
      const promise = rule.validator(value);
      setError(rule.key, promise);
    }
    if (rule.required && isEmpty(value)) {
      setError(rule.key, "required");
    }
    if (rule.minLength && !isEmpty(value) && value.length < rule.minLength) {
      setError(rule.key, "minLength");
    }
    if (rule.maxLength && !isEmpty(value) && value.length > rule.maxLength) {
      setError(rule.key, "maxLength");
    }
    if (rule.pattern && !isEmpty(value) && !rule.pattern.test(value)) {
      setError(rule.key, "pattern");
    }
  });

  const flattenErrors = flat(
    Object.keys(errors).map(key =>
      errors[key].map<[string, OneError]>(error => [key, error])
    )
  );
  const newPromise = flattenErrors.map(([key, promiseOrString]) =>
    (promiseOrString instanceof Promise
      ? promiseOrString
      : Promise.reject(promiseOrString)
    ).then<[string, undefined], [string, string]>(
      () => [key, undefined],
      reason => [key, reason]
    )
  );
  // 类型守卫
  function hasError(
    item: [string, undefined] | [string, string]
  ): item is [string, string] {
    return typeof item[1] === "string";
  }
  Promise.all(newPromise).then(result => {
    callback(zip(result.filter<[string, string]>(hasError)));
  });
};

export default validator;

function flat<T>(array: Array<T | T[]>) {
  let result: T[] = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] instanceof Array) {
      result.push(...(array[i] as T[]));
    } else {
      result.push(array[i] as T);
    }
  }
  return result;
}
function zip(array: Array<[string, string]>) {
  let result: { [key: string]: string[] } = {};
  array.map(([key, value]) => {
    result[key] = result[key] || [];
    result[key].push(value);
  });
  return result;
}
