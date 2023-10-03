import React from 'react'

type IconButtonProps = {
  iconLeft?: React.ReactNode,
  iconRight?: React.ReactNode,
  onClick?: () => void,
  className?: string,
  children?: React.ReactNode
}

const IconButton = ({ iconLeft, iconRight, onClick, className, children }: IconButtonProps) => {
  return (
    <div className={`iconButtonContainer ${className}`} onClick={onClick}>
      <div className="icon left">
        {iconLeft}
      </div>
      <div className="content">
        {children}
      </div>
      <div className="icon right">
        {iconRight}
      </div>
    </div>
  )
}

export default IconButton