import useOnClickOutside from 'hooks/useOnClickOutside'
import { useCallback, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

import Fade from 'transitions/fade'

import styles from './Modal.module.css'

const Modal = ({
    isOpen,
    withOverlay = true,
    withScroll = false,
    closeOnClickOutside = true,
    onClose = () => {},
    children,
}) => {
  const popoversRef = useRef(null)
  const modalRef = useRef(null)

  useEffect(() => {
    popoversRef.current = document.getElementById('popovers')
  }, [])

  useEffect(() => {
    if (!withScroll && isOpen) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'initial'
    }
  }, [isOpen, withScroll])

  const onClickOutside = useCallback(() => {
    if (closeOnClickOutside && isOpen) {
      onClose()
    }
  }, [onClose, closeOnClickOutside, isOpen])
  useOnClickOutside([modalRef.current], onClickOutside)

  return popoversRef.current ? createPortal(
    (
      <>
        {withOverlay && isOpen && (
          <div className={styles.overlay} />
        )}
        <Fade trigger={isOpen}>
          <div className={styles.modalContainer}>
            <div ref={modalRef} className={styles.modal}>
              {children}
            </div>
          </div>
        </Fade>
      </>
    ),
    popoversRef.current,
  ) : null
}

export default Modal
