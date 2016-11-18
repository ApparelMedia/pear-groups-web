import React from 'react'
import TopNav from 'containers/TopNavContainer'
import styles from './Header.scss'
import logo from './assets/logo.png'

export const Header = (props) => {
  return (
    <div className={styles.base}>
      <img className={styles.logo} src={logo} />
      <TopNav className={styles.nav} {...props} />
    </div>
  )
}

export default Header
