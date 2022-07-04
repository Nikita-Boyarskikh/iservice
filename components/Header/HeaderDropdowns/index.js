import { useCallback, useState } from 'react'
import Link from 'next/link'
import cn from 'classnames'

import Menu from 'components/Menu'
import MenuItems from 'components/Menu/MenuItems'
import MenuItem from 'components/Menu/MenuItem'

import ArrowIcon from 'public/icons/arrow.svg'
import styles from './HeaderDropdowns.module.css'

export const HEADER_MENU_ITEMS = [
  {
    name: 'Услуги',
    subitems: [
      {
        name: 'Ремонт телефонов',
        href: { pathname: '/catalog/[deviceType]', query: { deviceType: 'phone' } },
      },
      {
        name: 'Ремонт планшетов',
        href: { pathname: '/catalog/[deviceType]', query: { deviceType: 'tablet' } },
      },
      {
        name: 'Ремонт ноутбуков',
        href: { pathname: '/catalog/[deviceType]', query: { deviceType: 'notebook' } },
      },
      {
        name: 'Ремонт компьютеров',
        href: { pathname: '/catalog/[deviceType]', query: { deviceType: 'pc' } },
      },
      {
        name: 'Ремонт часов',
        href: { pathname: '/catalog/[deviceType]', query: { deviceType: 'watch' } },
      },
      {
        name: 'Аксессуары',
        href: { pathname: '/catalog/[deviceType]', query: { deviceType: 'accessories' } },
      },
    ],
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
    name: 'Контакты',
    href: '/',
  },
]

const Item = ({ name, subitems }) => {
  const [isDropdownOpened, setIsDropdownOpened] = useState(false)

  const handleTriggerClick = useCallback((event) => {
    event.preventDefault()
    setIsDropdownOpened(!isDropdownOpened)
  }, [setIsDropdownOpened, isDropdownOpened])

  return (
    <Menu isOpen={isDropdownOpened} isOpenChanged={setIsDropdownOpened} trigger={(
      <a className={cn(styles.item, styles.itemWithDropdown)} onClick={handleTriggerClick}>
        {name}
        <span className={cn(styles.dropdownArrow, { [styles.dropdownArrowOpened]: isDropdownOpened })}>
          <ArrowIcon alt={isDropdownOpened ? 'close dropdown' : 'open dropdown'} />
        </span>
      </a>
    )} offset={[0, Math.floor((60 - 25) / 2) + 1]}>
      <div className={styles.dropdown}>
        <MenuItems>
          {subitems.map(({ name, href }, i) => (
            <MenuItem key={i}>
              <Link href={href}><a>{name}</a></Link>
            </MenuItem>
          ))}
        </MenuItems>
      </div>
    </Menu>
  )
}

const HeaderDropdowns = () => (
  <menu className={styles.container}>
    {HEADER_MENU_ITEMS.map(({ name, href, subitems }, i) => {
      if (subitems) {
        return (
          <Item key={i} name={name} subitems={subitems} />
        )
      }

      return (
        <Link key={i} href={href}><a className={styles.item}>{name}</a></Link>
      )
    })}
  </menu>
)

export default HeaderDropdowns
