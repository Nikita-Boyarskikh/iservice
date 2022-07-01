import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

import appleIcon from 'public/icons/apple.svg'
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
        <span className={cn(styles.logo, { [styles.small]: size === SIZES.SMALL })}>
          <Image alt="" src={appleIcon.src} width={iconSize} height={iconSize} />
          <span className={styles.text}>iService</span>
        </span>
      </a>
    </Link>
  )
}

export default Logo
