import React, { Component, PropTypes } from 'react'
import styles from './GroupPhoto.scss'
import { Form, Upload, Icon, Button } from 'antd'

const Dragger = Upload.Dragger

class GroupPhoto extends Component {
  static defaultProps = {
    hidden: false
  }

  static propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
    hidden: PropTypes.bool.isRequired
  }

  render () {
    const { onFormSubmit, hidden } = this.props
    return (
      <Form onSubmit={onFormSubmit} className={hidden ? styles.hidden : ''}>
        <h2 className={styles.title}>Group Photo</h2>
        <Dragger>
          <p className='ant-upload-drag-icon'>
            <Icon type='inbox' />
          </p>
          <p className='ant-upload-text'>Check or drag file to this area</p>
        </Dragger>
        <Button htmlType='submit'>Next</Button>
      </Form>
    )
  }
}

export default GroupPhoto
