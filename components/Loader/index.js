import styles from './Loader.module.css'

const Loader = () => (
  <svg viewBox="25 25 50 50" className={styles.loader}>
    <circle cx="50" cy="50" r="20" className={styles.circle} />
  </svg>
)

export default Loader
