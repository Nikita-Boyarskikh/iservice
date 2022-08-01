import styles from './RegistrationLayout.module.css'

const RegistrationLayout = ({ header, children }) => (
  <section className={styles.layout}>
    <header className={styles.header}>{header}</header>
    <main className={styles.main}>
      {children}
    </main>
  </section>
)

export default RegistrationLayout
