import React, { Component, PropTypes } from 'react'
import styles from './PersonListItem.scss'

class PersonListItem extends Component {
  render () {
    const { photoUrl, firstName, lastName } = this.props
    return (
      <li className={styles.base}>
        <img className={styles.image} src={photoUrl} />
        <p className={styles.name}>{firstName} {lastName}></p>
      </li>
    )
  }
}

PersonListItem.propTypes = {
  photoUrl: PropTypes.string.isOptional,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
}
export default PersonListItem
