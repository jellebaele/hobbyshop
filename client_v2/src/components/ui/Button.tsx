import '../../assets/styles/components/ui/button.scss'

type ButtonProps = {
  className?: string,
  children?: React.ReactNode
}

const Button = ({ className, children }: ButtonProps) => {
  return (
    <button className={`buttonContainer ${className}`}>{children}</button>
  )
}

export default Button