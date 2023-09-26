import { UseFormRegister, FieldValues } from "react-hook-form"

type InputFieldProps<T extends FieldValues> = {
  name: FieldValues[string],
  register: UseFormRegister<T>,
  type?: string
}

function InputField<T extends FieldValues>({ name, register, type = 'text' }: InputFieldProps<T>) {
  return (
    <input {...register(name)} type={type} />
  )
}

export default InputField