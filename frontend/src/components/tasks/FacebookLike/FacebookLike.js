import React, { PropTypes } from 'react'
import styles from './FacebookLike.scss'
import FacebookProvider, { Like } from 'react-facebook'

const FacebookLike = ({ instructionText }) => (
  <div className={styles.base}>
    <p>{instructionText}</p>
    <FacebookProvider appID='214317158699655'>
      <Like href='https://www.facebook.com' colorScheme='dark' />
    </FacebookProvider>
  </div>
)

FacebookLike.propTypes = {
  instructionText: PropTypes.string.isRequired
}

export default FacebookLike
