import React, { PropTypes } from 'react'
import styles from './WatchYoutube.scss'

const WatchYoutube = ({ instructionText }) => (
  <div className={styles.base}>
    <p>{instructionText}</p>
    <iframe width='560' height='315' src='https://www.youtube.com/embed/ddN9yZPs2P0' />
  </div>
)

WatchYoutube.propTypes = {
  instructionText: PropTypes.string.isRequired
}
export default WatchYoutube
