import React, { Component, PropTypes } from 'react'
import styles from './AddUserButton.scss'
import { Button } from 'antd'

class AddUserButton extends Component {
  render () {
  		const { createUser } = this.props
  		return (
  			<Button onClick={createUser}>Add User</Button>
  		)
  }
}


export default AddUserButton