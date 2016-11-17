import React, { Component, PropTypes } from 'react'
import styles from './GroupStory.scss'
import { Form, Input, Button } from 'antd'

class GroupType extends Component {
  static defaultProps = {
    hidden: false
  }

  static propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
    onValueChange: PropTypes.func.isRequired,
    hidden: PropTypes.bool.isRequired
  }

  render () {
    const { onFormSubmit, onValueChange, hidden } = this.props
    return (
      <Form onSubmit={onFormSubmit} className={hidden ? styles.hidden : ''}>
        <h2 className={styles.title}>Group Story</h2>
        <Input onChange={onValueChange} type='textarea' placeholder='Tell us your story' />
        <Button htmlType='submit'>Next</Button>
      </Form>
    )
  }
}

export default GroupType
