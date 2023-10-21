import '../../assets/styles/components/ui/modal.scss'

type ModalProps = {
  visible: boolean,
  setInvisible: () => void,
  children?: React.ReactNode,
}

const Modal = ({ visible, setInvisible, children }: ModalProps) => {
  return (
    <div className={`modalWrapper ${visible ? 'active' : ''}`} onClick={setInvisible}>
      <div className={`modalContainer ${visible ? 'active' : ''}`} onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default Modal