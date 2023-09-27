import '../../assets/styles/components/form/validationError.scss'

type ValidationErrorProps = {
  message?: string;
}

const ValidationError = ({ message }: ValidationErrorProps) => {
  return (
    <div className='validationError'>{message}</div>
  )
}

export default ValidationError