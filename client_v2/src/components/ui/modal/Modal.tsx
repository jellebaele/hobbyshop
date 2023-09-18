import './modal.scss'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

type ModalProps = {
  children?: React.ReactNode,
}

const Modal = ({ children }: ModalProps) => {
  const [visible, setVisible] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    setVisible(true)
  }, [])

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => navigate(-1), 300)
  }

  return (
    <div className={`modalWrapper ${visible ? 'active' : ''}`} onClick={handleClose}>
      <div className={`modalContainer ${visible ? 'active' : ''}`} onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default Modal