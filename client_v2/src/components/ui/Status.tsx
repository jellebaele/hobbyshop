import '../../assets/styles/components/ui/status.scss'

type StatusProps = {
  status: 'Actief' | 'Inactief',
  className?: string
}
const Status = ({ status, className }: StatusProps) => {
  return (
    <div className={`status ${status.toLowerCase()} ${className}`}>{status}</div>
  )
}

export default Status