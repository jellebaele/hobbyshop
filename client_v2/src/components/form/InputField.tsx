import '../../assets/styles/components/form/inputField.scss'
import { UseFormRegister, FieldValues, FieldError } from "react-hook-form"
import ValidationError from "./ValidationError"

type InputFieldProps<T extends FieldValues> = {
  name: FieldValues[string],
  label: string,
  type?: string,
  disabled?: boolean,
  className?: string,
  error?: FieldError,
  register: UseFormRegister<T>,
}

function InputField<T extends FieldValues>({ name, label, type = 'text', disabled, className, error, register }: InputFieldProps<T>) {
  return (
    <div className={`inputFieldContainer ${className}`}>
      <div className="property">
        <label htmlFor={name}>{label}</label>
        <input {...register(name)} type={type} disabled={disabled} />
      </div>
      <ValidationError message={error?.message} />
    </div>
  )
}

export default InputField