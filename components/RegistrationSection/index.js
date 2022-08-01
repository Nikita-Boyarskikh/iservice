import styles from './RegistrationSection.module.css'

const RegistrationSection = ({ children }) => (
  <section className={styles.registration}>
    {children}
  </section>
)

export default RegistrationSection
