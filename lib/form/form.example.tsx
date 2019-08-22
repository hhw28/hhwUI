import React, { useState, Fragment } from "react";
import Form, { FormValue } from "./form";
import Validator from './validator';
import Button from '../button/button';

const FormExample: React.FunctionComponent = () => {
  const [formData, setFormData] = useState<FormValue>({
    username: '',
    password: ''
  });
  const [fileds] = useState([
    { name: 'username', label: '用户名', input: { type: 'text' } },
    { name: 'password', label: '密码', input: { type: 'password' } },
  ]);
  const [errors, setErrors] = useState({});
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const rules = [
      { key: 'username', required: true },
      { key: 'username', minLength: 6, maxLength: 12 },
      { key: 'username', pattern: /^[A-Za-z0-9]+$/ },
      { key: 'password', required: true },
    ]
    const errors = Validator(formData, rules)
    setErrors(errors)
    console.log(errors)
  }
  return (
    <div>
      <Form
        value={formData}
        fileds={fileds}
        buttons={
          <Fragment>
            <Button type="submit" level="primary">提交</Button>
            <Button>返回</Button>
          </Fragment>
        }
        errors={errors}
        onChange={(newValue) => setFormData(newValue)}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default FormExample;