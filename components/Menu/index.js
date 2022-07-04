import { useCallback, useEffect, useRef, useState } from 'react'
import { usePopper } from 'react-popper'
import { createPortal } from 'react-dom'

import Fade from 'transitions/fade'
import useOnClickOutside from 'hooks/useOnClickOutside'

import styles from './Menu.module.css'

const Menu = ({ isOpen, isOpenChanged, trigger, offset, children }) => {
  const [triggerRef, setTriggerRef] = useState(null)
  const [popperRef, setPopperRef] = useState(null)
  const popoversRef = useRef()

  const { styles: { popper: popperStyles }, attributes: { popper: popperAttributes } } =
    usePopper(triggerRef, popperRef, {
      placement: 'bottom-start',
      modifiers: [
        {
          name: 'offset',
          options: { offset },
        },
        {
          name: 'flip',
          options: {
            fallbackPlacements: ['bottom'],
          },
        },
      ],
    })
  const close = useCallback(() => isOpen && isOpenChanged(false), [isOpen, isOpenChanged])
  useOnClickOutside([popperRef, triggerRef], close)

  useEffect(() => {
    popoversRef.current = document.getElementById('popovers')
  })

  const menuPortal = popoversRef.current ? createPortal(
    (
      <Fade trigger={isOpen}>
        <menu
          ref={setPopperRef}
          style={popperStyles}
          className={styles.menu}
          {...popperAttributes}
        >
          {children}
        </menu>
      </Fade>
    ),
    popoversRef.current,
  ) : null

  return (
    <>
      <div ref={setTriggerRef}>
        {trigger}
      </div>
      {menuPortal}
    </>
  )
}

export default Menu

