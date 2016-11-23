import React, { Component, PropTypes } from 'react'
import './HomeView.scss'
import MemberListContainer from 'containers/MemberListContainer'

class HomeView extends Component {
  static propTypes = {
    name : PropTypes.string.isRequired,
    story : PropTypes.string.isRequired
  }

  render () {
    const { name, story } = this.props
    return (
      <div>
        <h4>{ name }</h4>
        <p>{ story }</p>
        <MemberListContainer/>
      </div>
    )
  }
}

export default HomeView
