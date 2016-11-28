import React, { Component, PropTypes } from 'react'
import { Form, Input, Button } from 'antd'

class GroupName extends Component {
  static defaultProps = {
    hidden: false
  }

  static propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
    onNameChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    hidden: PropTypes.bool.isRequired
  }

  render () {
    const { onFormSubmit, onNameChange, name, hidden } = this.props
    return (
      <Form onSubmit={onFormSubmit} style={hidden ? { display: 'none' } : {}}>
        <Input label='Name' name='name' onChange={onNameChange} value={name} placeholder='Group Name' />
        <Button htmlType='submit'>Next</Button>
      </Form>
    )
  }
}

export default GroupName
