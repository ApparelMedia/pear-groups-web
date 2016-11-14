import React, { Component, PropTypes } from 'react'
import styles from './PeopleList.scss'
import PersonListItem from '../PersonListItem'

class PeopleList extends Component {
  render () {
    return (
      <div className={styles.base}>
        <h3>{ this.props.title }</h3>
        <ul className={styles.list}>
          {
            this.props.people.map((person) => {
              // const {firstName, lastName, photoUrl} = person;
              return <PersonListItem key={person.id} {...person} />
            })
          }
        </ul>
      </div>
    )
  }
}

PeopleList.propTypes = {
  title: PropTypes.string.isRequired,
  people: PropTypes.string.isRequired
}

export default PeopleList
