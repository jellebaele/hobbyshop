import '../../assets/styles/components/ui/header.scss'

const Header = ({ children }: { children: string }) => {
  return (
    <h2 className="header">{children}</h2>
  )
}

export default Header