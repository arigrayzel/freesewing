import { useState } from 'react'

const Modal = ({ cancel, children }) => {


  return (
    <div className={`
      fixed top-0 left-0 right-0 w-screen h-screen
      bg-neutral bg-opacity-70 z-30
      hover:cursor-pointer flex flex-col justify-center
      `} onClick={cancel}>
        <div className="m-auto text-neutral-content lightbox" style={{
          maxHeight: "calc(100vh - 6rem)",
          maxWidth: "calc(100vw - 6rem)",
        }}>
          {children}
        </div>
    </div>
  )
}

export default Modal
