import Logo from 'components/Logo'
import HeaderDropdowns from './HeaderDropdowns'
import HeaderMenu from './HeaderMenu'

import styles from './Header.module.css'

const Header = ({ user }) => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <Logo/>
    </div>

    <div className={styles.dropdowns}>
      <HeaderDropdowns />
    </div>

    <HeaderMenu user={user} />
  </header>
)

export default Header
