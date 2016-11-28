import React, { Component, PropTypes } from 'react'
import './HomeView.scss'
import MemberListContainer from 'containers/MemberListContainer'
import AddUserButton from 'components/AddUserButton'

class HomeView extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    story: PropTypes.string.isRequired,
    createUser: PropTypes.string.isRequired
  }

  render () {
    const { name, story, createUser } = this.props

    return (
      <div>
        <h4>{ name }</h4>
        <p>{ story }</p>
        <MemberListContainer />
        <AddUserButton createUser={createUser} />
      </div>
    )
  }
}

export default HomeView
