import Image from 'next/image'

import styles from './MenuBurger.module.css'

import crossIcon from 'public/icons/cross.svg'
import burgerIcon from 'public/icons/burger.svg'

const MenuBurger = ({ isOpen, toggle }) => (
  <button className={styles.trigger} onClick={toggle}>
    <Image
      alt={isOpen ? 'close menu' : 'open menu'}
      src={isOpen ? crossIcon.src : burgerIcon.src}
      width={25}
      height={25}
    />
  </button>
)

export default MenuBurger
