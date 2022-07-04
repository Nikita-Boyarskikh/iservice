import { useState } from 'react'
import Link from 'next/link'

import Menu from 'components/Menu'
import MenuItems from 'components/Menu/MenuItems'
import MenuItem from 'components/Menu/MenuItem'
import MenuBurger from 'components/Menu/MenuBurger'

import styles from './HeaderMenuBurger.module.css'

export const HEADER_BURGER_ITEMS = [
  {
    name: 'Личный кабинет',
    href: '/login',
  },
  {
    name: 'Чат',
    href: '/chat',
  },
  {
    name: 'Услуги',
    href: '/catalog',
  },
  {
    name: 'Город',
    href: '/',
  },
  {
    name: 'Статьи',
    href: '/',
  },
  {
    name: 'Отзывы',
    href: '/reviews',
  },
  {
    name: 'Мои заказы',
    href: '/',
  },
  {
    name: 'Контакты',
    href: '/',
  },
  {
    name: 'Выход',
    href: '/',
  },
]

const HeaderMenuBurger = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false)

  return (
    <Menu isOpen={isMenuOpened} isOpenChanged={setIsMenuOpened} trigger={(
      <MenuBurger isOpen={isMenuOpened} toggle={() => setIsMenuOpened(!isMenuOpened)} />
    )} offset={[0, Math.floor((60 - 25) / 2) + 1]}>
      <div className={styles.dropdown}>
        <MenuItems>
          {HEADER_BURGER_ITEMS.map(({ name, href }, i) => (
            <MenuItem key={i}>
              <Link href={href}><a>{name}</a></Link>
            </MenuItem>
          ))}
        </MenuItems>
      </div>
    </Menu>
  )
}

export default HeaderMenuBurger
