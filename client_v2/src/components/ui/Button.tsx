import '../../assets/styles/components/ui/button.scss'

type ButtonProps = {
  onClick?: (e: React.MouseEvent) => void,
  className?: string,
  children?: React.ReactNode
}

const Button = ({ onClick, className, children }: ButtonProps) => {
  return (
    <div className={`buttonContainer ${className}`} onClick={onClick}>{children}</div>
  )
}

export default Button