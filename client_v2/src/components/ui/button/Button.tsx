import './button.scss'

type ButtonProps = {
  className?: string,
  children?: string
}

const Button = ({ className, children }: ButtonProps) => {
  return (
    <button className={`buttonContainer ${className}`}>{children}</button>
  )
}

export default Button