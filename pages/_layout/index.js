import Header from 'components/header'
import Footer from 'components/footer'

import styles from './Layout.module.css'

const Layout = ({ children }) => (
  <div className={styles.container}>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
)

export default Layout
