import '../../assets/styles/components/ui/container.scss'

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container">{children}</div>
  )
}

export default Container