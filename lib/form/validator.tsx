import { FormValue } from './form';

type FormRules = Array<FormRule>;
interface FormRule {
  key: string,
  required?: boolean,
  minLength?: number,
  maxLength?: number,
  pattern?: RegExp,
  validator?: (value:string) => Promise<string>,
}

type OneError = string | Promise<string>; 

const validator = (Formvalue: FormValue, rules: FormRules, callback: (error:any) => void): void => {
  const errors: any = {}

  const isEmpty = (value: any) => {
    return value === undefined || value === null || value === '';
  }
  const setError = (key: string, error: OneError) => {
    if (isEmpty(errors[key])) {
      errors[key] = []
    }
    errors[key].push(error)
  }
  rules.map(rule => {
    const value = Formvalue[rule.key];
    if(rule.validator){
      const promise = rule.validator(value)
      setError(rule.key, promise)
    }
    if (rule.required && isEmpty(value)) {
      setError(rule.key, 'required')
    }
    if (rule.minLength && !isEmpty(value) && value.length < rule.minLength) {
      setError(rule.key, 'minLength')
    }
    if (rule.maxLength && !isEmpty(value) && value.length > rule.maxLength) {
      setError(rule.key, 'maxLength')
    }
    if (rule.pattern && !isEmpty(value) && !rule.pattern.test(value)) {
      setError(rule.key, 'pattern')
    }
  })

  const flattenErrors = flat(Object.keys(errors).map(key => errors[key].map((promise: any) => [key, promise])))
  const newPromise = flattenErrors.map(([key, promiseOrString]) => (promiseOrString instanceof Promise ? promiseOrString : Promise.reject(promiseOrString))
  .then(() => [key, undefined], (reason) => [key, reason]))

  Promise.all(newPromise).then(result => {
    callback(zip(result.filter((item: any[]) => item[1])))
  })
}

export default validator

function flat(array: Array<any>){
  let result = []
  for(let i=0; i<array.length; i++){
    if(array[i] instanceof Array){
      result.push(...array[i])
    }else{
      result.push(array[i])
    }
  }
  return result
}
function zip(array: any[][]){
  let result:any = {}
  array.map(([key, value]) => {
    result[key] = result[key] || []
    result[key].push(value)
  })
  return result
}