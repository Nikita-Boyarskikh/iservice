import styles from './RegistrationTypeSection.module.css'

const RegistrationTypeSection = ({ children }) => (
  <section className={styles.registration}>
    {children}
  </section>
)

export default RegistrationTypeSection
