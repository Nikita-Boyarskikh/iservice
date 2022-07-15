import Link from 'next/link'

import styles from './Place.module.css'

const Place = ({ id, name, price }) => (
  <Link href={`/catalog/${id}`}><a className={styles.place}>
    <div className={styles.price}>{price}</div>
    <div className={styles.name}>{name}</div>
  </a></Link>
)

export default Place
