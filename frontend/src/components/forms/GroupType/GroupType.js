import React, { Component, PropTypes } from 'react'
import styles from './GroupType.scss'
import { Form, Cascader, Button } from 'antd'

class GroupType extends Component {
  static defaultProps = {
    hidden: false
  }

  static propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
    onValueChange: PropTypes.func.isRequired,
    groupTypes: PropTypes.array.isRequired,
    hidden: PropTypes.bool.isRequired,
  }

  render () {
    const { onFormSubmit, onValueChange, groupTypes, hidden } = this.props
    return (
      <Form onSubmit={onFormSubmit} className={hidden ? styles.hidden : ''}>
        <h2 className={styles.title}>Group Type</h2>
        <Cascader onChange={onValueChange} options={groupTypes} placeholder='Select your Group Type' />
        <Button htmlType='submit'>Next</Button>
      </Form>
    )
  }
}

export default GroupType
