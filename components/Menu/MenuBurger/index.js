import styles from './MenuBurger.module.css'

import CrossIcon from 'public/icons/cross.svg'
import BurgerIcon from 'public/icons/burger.svg'

const MenuBurger = ({ isOpen, toggle }) => {
  const Icon = isOpen ? CrossIcon : BurgerIcon
  return (
    <button className={styles.trigger} onClick={toggle}>
      <Icon alt={isOpen ? 'close menu' : 'open menu'} />
    </button>
  )
}

export default MenuBurger
