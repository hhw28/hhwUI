import { FormValue } from './form';

type FormRules = Array<FormRule>;
interface FormRule {
  key: string,
  required?: boolean,
  minLength?: number,
  maxLength?: number,
  pattern?: RegExp,
}

interface FormErrors {

}

const validator = (value: FormValue, rules: FormRules): FormErrors => {
  const errors: any = {}

  const isEmpty = (value: any) => {
    return value === undefined || value === null || value === '';
  }
  const setError = (key: string, message: string) => {
    if (isEmpty(errors[key])) {
      errors[key] = []
    }
    errors[key].push(message)
  }
  rules.map(rule => {
    if (rule.required && isEmpty(value[rule.key])) {
      setError(rule.key, '必填')
    }
    if (rule.minLength && !isEmpty(value[rule.key]) && value[rule.key].length < rule.minLength) {
      setError(rule.key, `太短，用户名长度为${rule.minLength}-${rule.maxLength}个字符`)
    }
    if (rule.maxLength && !isEmpty(value[rule.key]) && value[rule.key].length > rule.maxLength) {
      setError(rule.key, `太长，用户名长度为${rule.minLength}-${rule.maxLength}个字符`)
    }
    if (rule.pattern && !isEmpty(value[rule.key]) && !rule.pattern.test(value[rule.key])) {
      setError(rule.key, '用户名格式错误')
    }
  })
  return errors
}

export default validator