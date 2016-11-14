import React, { Component, PropTypes } from 'react'
import './HomeView.scss'

class HomeView extends Component {
  static propTypes = {
    name : PropTypes.string.isRequired
  }

  render () {
    const { name } = this.props
    return (
      <div>
        <h4>{ name }</h4>
      </div>
    )
  }
}

export default HomeView
