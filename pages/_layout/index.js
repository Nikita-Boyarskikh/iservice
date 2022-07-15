import { useContext } from 'react'

import Header from 'components/Header'
import Footer from 'components/Footer'

import { StateContext } from 'state/context'

import styles from './Layout.module.css'

const Layout = ({ children }) => {
  const { state } = useContext(StateContext)

  return (
    <div className={styles.container}>
      <Header user={state.user} />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
