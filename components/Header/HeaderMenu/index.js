import { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import HeaderMenuBurger from './HeaderMenuBurger'
import HeaderMenuProfile from './HeaderMenuProfile'

import { StateContext } from 'state/context'

import styles from './HeaderMenu.module.css'
import phoneIcon from 'public/icons/phone.svg'
import chatIcon from 'public/icons/chat.svg'

const HeaderMenu = () => {
  const { state, dispatch } = useContext(StateContext)

  return (
    <div className={styles.menu}>
      <span className={styles.phone}>
        <a href="tel:+74953746474">
          <Image
            alt="phone"
            src={phoneIcon.src}
            width={25}
            height={25}
          />
        </a>
        <a className={styles.text} href="tel:+74953746474">
          +7 (495) 374-64-74
        </a>
      </span>

      <Link href="/chat">
        <a>
          <Image
            alt="chat"
            src={chatIcon.src}
            width={25}
            height={25}
          />
        </a>
      </Link>

      {state.user.isLoggedIn && (
        <HeaderMenuProfile account={state.user.account} />
      )}

      <div className={styles.burger}>
        <HeaderMenuBurger />
      </div>
    </div>
  )
}

export default HeaderMenu
