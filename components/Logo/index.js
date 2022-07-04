import Link from 'next/link'

import AppleIcon from 'public/icons/apple.svg'
import styles from './Logo.module.css'

export const SIZES = {
  SMALL: 'small',
  NORMAL: 'normal',
}

const Logo = ({ size = SIZES.NORMAL }) => {
  const iconSize = {
    [SIZES.NORMAL]: 25,
    [SIZES.SMALL]: 20,
  }[size]

  return (
    <Link href="/">
      <a>
        <span className={styles.logo} style={{ height: iconSize }}>
          <AppleIcon alt="logo" />
          <span className={styles.text}>iService</span>
        </span>
      </a>
    </Link>
  )
}

export default Logo
