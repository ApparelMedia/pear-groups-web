import React, { Component, PropTypes } from 'react'
import { Button } from 'antd'

class AddUserButton extends Component {
  static propTypes = {
    createUser: PropTypes.func.isRequired
  }

  render () {
    const { createUser } = this.props
    return (
      <Button onClick={createUser}>Add User</Button>
    )
  }
}

export default AddUserButton
