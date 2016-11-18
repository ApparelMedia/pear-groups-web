import React, { Component, PropTypes } from 'react'
import { IndexLink, Link } from 'react-router'
import styles from './TopNav.scss'

class TopNav extends Component {
  static propTypes = {
    group: PropTypes.bool.isRequired,
    className: PropTypes.string
  }

  outputCreate (hasGroup) {
    if ( ! hasGroup) {
      return (<Link to='/create' activeClassName={styles.active}>
        Create
      </Link>)
    }
    return ''
  }

  render () {
    const { group, className: classes = '' } = this.props

    return (
      <nav className={classes + ' ' + styles.base}>
        <IndexLink to='/' activeClassName={styles.active}>
          Home
        </IndexLink>

        <Link to='/login' activeClassName={styles.active}>
          Login
        </Link>

        <Link to='/rally' activeClassName={styles.active}>
          Rally
        </Link>
        {
          this.outputCreate(group)
        }
      </nav>
    )
  }
}

export default TopNav
