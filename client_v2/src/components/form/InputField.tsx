import '../../assets/styles/components/form/inputField.scss'
import { UseFormRegister, FieldValues, FieldError } from "react-hook-form"
import ValidationError from "./ValidationError"

type InputFieldProps<T extends FieldValues> = {
  name: FieldValues[string],
  label: string,
  type?: string,
  disabled?: boolean,
  error?: FieldError,
  register: UseFormRegister<T>,
}

function InputField<T extends FieldValues>({ name, label, type = 'text', disabled, error, register }: InputFieldProps<T>) {
  return (
    <div className="inputFieldContainer">
      <div className="property">
        <label htmlFor={name}>{label}</label>
        <input {...register(name)} type={type} disabled={disabled} />
      </div>
      <ValidationError message={error?.message} />
    </div>
  )
}

export default InputField