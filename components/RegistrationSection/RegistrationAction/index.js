import styles from './RegistrationAction.module.css'

const RegistrationAction = ({ children }) => (
  <div className={styles.action}>
    {children}
  </div>
)

export default RegistrationAction
