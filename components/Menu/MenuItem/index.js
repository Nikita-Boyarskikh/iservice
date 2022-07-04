import styles from './MenuItem.module.css'

const MenuItem = ({ children }) => (
  <div className={styles.menuItem}>
    {children}
  </div>
)

export default MenuItem
