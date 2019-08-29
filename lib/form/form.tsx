import React, { ReactFragment } from "react";
import "./form.scss";
import Input from '../input/input';
import { scopedClassMaker } from "../helpers/classes";
const sc = scopedClassMaker("hhw-form");

export interface FormValue {
  [k: string]: any
}
interface Props {
  value: FormValue;
  fileds: Array<{ name: string, label: string, input: { type: string } }>;
  buttons: ReactFragment;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChange: (value: FormValue) => void;
  className?: string;
  errors: { [K: string]: string[] };
  errorsDisplayMode?: 'first' | 'all';
  transformError?: (message: string) => string;
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
  const transformError = (message: string) => {
    const map: any = {
      required: '必填',
      minLength: '太短',
      maxLength: '太长',
    }
    return props.transformError && props.transformError(message) || map[message] || '未知错误'
  }
  return (
    <form
      className={sc("", {
        extra: [props.className].join(" ")
      })}
      onSubmit={onSubmit}
    >
      <table className={sc('tabel')}>
        <tbody>
          {props.fileds.map(f => (
            <tr key={f.name} className={sc('tr')}>
              <td className={sc('td')}>
                <span className={sc('label')}>{f.label}</span>
              </td>
              <td className={sc('td')}>
                <Input
                  className={sc('input')}
                  type={f.input.type}
                  value={formData[f.name]}
                  onChange={(e) => onInputChange(f.name, e.target.value)}
                />
                <div className={sc('error')}>
                  {props.errors[f.name] ?
                    (props.errorsDisplayMode === 'first' ?
                      transformError!(props.errors[f.name][0]) :
                      props.errors[f.name].map(transformError!).join('，')) :
                    <span>&nbsp;</span>
                  }
                </div>
              </td>
            </tr>
          ))}
          <tr className={sc('buttons')}>
            <td className={sc('td')}></td>
            <td className={sc('td')}>
              {props.buttons}
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};
Form.defaultProps = {
  errorsDisplayMode: 'first'
}

export default Form;