import Header from 'components/Header'
import Footer from 'components/Footer'

import styles from './Layout.module.css'

const Layout = ({ children }) => (
  <div className={styles.container}>
    <Header />
    <main className={styles.main}>{children}</main>
    <Footer />
  </div>
)

export default Layout
