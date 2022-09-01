import { useCallback, useMemo, useState } from 'react'
import Link from 'next/link'

import Menu from 'components/Menu'
import MenuItems from 'components/Menu/MenuItems'
import MenuItem from 'components/Menu/MenuItem'
import useIsMobile from 'hooks/useIsMobile'

import styles from './HeaderMenuProfile.module.css'
import ProfileIcon from 'public/icons/profile.svg'

export const HEADER_PROFILE_MENU_ITEMS = [
  {
    name: 'Вход/регистрация',
    href: '/login',
  },
  {
    name: 'Ремонт',
    href: '/catalog',
  },
  {
    name: 'Мои заказы',
    href: '/profile',
  },
  {
    name: 'Чат',
    href: '/chat',
  },
]

const DesktopHeaderMenuProfile = ({ toggle, trigger }) => {
  const handleTriggerClick = useCallback((event) => {
    event.preventDefault()
    toggle()
  }, [toggle])

  return (
    <a onClick={handleTriggerClick}>
      {trigger}
    </a>
  )
}

const HeaderMenuProfile = ({ account }) => {
  const isMobile = useIsMobile()
  const [isMenuOpened, setIsMenuOpened] = useState(false)
  const trigger = useMemo(() => (
    <div className={styles.trigger}>
      <ProfileIcon alt="profile" />
      {account} ₽
    </div>
  ), [account])

  if (isMobile) {
    return (
      <Link href="/profile/profile"><a>{trigger}</a></Link>
    )
  }

  return (
    <Menu isOpen={isMenuOpened} isOpenChanged={setIsMenuOpened} trigger={(
      <DesktopHeaderMenuProfile toggle={() => setIsMenuOpened(!isMenuOpened)} trigger={trigger} />
    )} offset={[0, Math.floor((60 - 25) / 2) + 1]}>
      <div className={styles.dropdown}>
        <MenuItems>
          {HEADER_PROFILE_MENU_ITEMS.map(({ name, href }, i) => (
            <MenuItem key={i}>
              <Link href={href}><a>{name}</a></Link>
            </MenuItem>
          ))}
        </MenuItems>
      </div>
    </Menu>
  )
}

export default HeaderMenuProfile
