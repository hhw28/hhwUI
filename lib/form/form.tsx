import React, { ReactFragment } from "react";
import "./form.scss";
import Input from '../input/input';
import { scopedClassMaker } from "../helpers/classes";
const sc = scopedClassMaker("hhw-form");

export interface FormValue {
  [k: string]: any
}
interface Props {
  value: FormValue,
  fileds: Array<{ name: string, label: string, input: { type: string } }>,
  buttons: ReactFragment,
  onSubmit: React.FormEventHandler<HTMLFormElement>,
  onChange: (value: FormValue) => void,
  errors: any
  className?: string
}

const Form: React.FunctionComponent<Props> = props => {
  const formData = props.value;
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    props.onSubmit(e);
  }
  const onInputChange = (name: string, value: string) => {
    const newValue = { ...formData, [name]: value }
    props.onChange(newValue)
  }
  return (
    <form
      className={sc("", {
        extra: [props.className].join(" ")
      })}
      onSubmit={onSubmit}
    >
      {props.fileds.map(f => (
        <div key={f.name}>
          <span>{f.label}</span>
          <Input
            type={f.input.type}
            value={formData[f.name]}
            onChange={(e) => onInputChange(f.name, e.target.value)}
          />
          <div>{props.errors[f.name]}</div>
        </div>
      ))}
      <div>
        {props.buttons}
      </div>
    </form>
  );
};

export default Form;