import React, { Component, PropTypes } from 'react'
import { Button } from 'antd'

class LoginView extends Component {
  static propTypes = {
    locateMeOnClick: PropTypes.func.isRequired,
    city: PropTypes.string,
    state: PropTypes.string
  }

  getLocation (city, state) {
    if (city && state) {
      return <p>City: {city} - State: {state}</p>
    }

    return '';
  }

  render () {
    const { locateMeOnClick, city, state } = this.props

    let location = this.getLocation(city, state)

    return (
      <div>
        <h4>Login</h4>
        {location}
        <Button onClick={locateMeOnClick}>Locate Me</Button>
      </div>
    )
  }
}

export default LoginView
