import React, { Component, PropTypes } from 'react'
import styles from './Task.scss'

class Task extends Component {
  render () {
    let { children, name, index, open } = this.props
    let count = index + 1;
    let baseClassName = [
      styles.base,
      open ? ' ' + styles.open : ' ' + styles.closed,
    ].join(' ')

    return (
      <li className={baseClassName}>
        <div className={styles.head}>
          <span className={styles.count}>{count}</span> {name}
        </div>
        <div className={styles.container}>
          { children }
        </div>
      </li>
    )
  }
}

Task.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  open: PropTypes.bool.isRequired,
  completed: PropTypes.bool.isRequired
}

Task.defaultProps = {
  open: false
}

export default Task
