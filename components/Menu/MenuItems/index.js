import styles from './MenuItems.module.css'

const MenuItems = ({ children }) => (
  <div className={styles.menuItems}>
    {children}
  </div>
)

export default MenuItems
