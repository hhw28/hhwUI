import React, { useState, Fragment } from "react";
import Form, { FormValue } from "./form";
import Validator from './validator';
import Button from '../button/button';

const userNames = ['anna', 'jon', 'hannah'];
const checkUserName = (username:string, succeed: () => void, fail: () => void) => {
  setTimeout(() => {
    console.log('check username')
    if(userNames.indexOf(username) >= 0){
      succeed()
    }else{
      fail()
    }
  }, 1000)
}

const FormExample: React.FunctionComponent = () => {
  const [formData, setFormData] = useState<FormValue>({
    username: 'lisalin',
    password: ''
  });
  const [fileds] = useState([
    { name: 'username', label: '用户名', input: { type: 'text' } },
    { name: 'password', label: '密码', input: { type: 'password' } },
  ]);
  const [errors, setErrors] = useState({});
  const validator =  (username: string) => {
    console.log('validator 被调用')
    return new Promise<string>((resolve, reject)=>{
      checkUserName(username, resolve, () => reject('unique'))
    })
  }
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const rules = [
      { key: 'username', required: true },
      { key: 'username', minLength: 6, maxLength: 12 },
      { key: 'username', pattern: /^[A-Za-z0-9]+$/ },
      { key: 'username', validator},
      { key: 'username', validator},
      { key: 'password', required: true },
    ]
    Validator(formData, rules, (errors)=>{
      console.log('所有检查完毕');
      setErrors(errors);
    })
  }
  const transformError = (message: string) => {
    const map: any = {
      unique: '用户名不存在'
    }
    return map[message]
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
        transformError={transformError}
        errors={errors}
        onChange={(newValue) => setFormData(newValue)}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default FormExample;