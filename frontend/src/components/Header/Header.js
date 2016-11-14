import React from 'react'
import { IndexLink, Link } from 'react-router'
import styles from './Header.scss'
import logo from './assets/logo.png'

export const Header = (props) => (
  <div className={styles.base}>
    <img className={styles.logo} src={logo} />
    <nav className={styles.nav}>
      <IndexLink to='/' activeClassName={styles.active}>
        Home
      </IndexLink>

      <Link to='/login' activeClassName={styles.active}>
        Login
      </Link>

      <Link to='/rally' activeClassName={styles.active}>
        Rally
      </Link>

      <Link to='/create' activeClassName={styles.active}>
        Create
      </Link>
    </nav>
  </div>
)

export default Header
