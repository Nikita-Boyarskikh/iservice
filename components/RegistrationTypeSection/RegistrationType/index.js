import Link from 'next/link'

import styles from 'components/RegistrationTypeSection/RegistrationType/RegistrationType.module.css'

const RegistrationType = ({ href, header, description, icon }) => (
  <Link href={href}><a>
    <button className={styles.registrationType}>
      <div className={styles.icon}>{icon}</div>
      <header className={styles.header}>{header}</header>
      <span className={styles.description}>{description}</span>
    </button>
  </a></Link>
)

export default RegistrationType
