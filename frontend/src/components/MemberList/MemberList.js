import React, { Component, PropTypes } from 'react'
import styles from './MemberList.scss'

class MemberList extends Component {
	render () {
		let { members } = this.props

		return (
			<ul>
				{ members.map((member) => <li key={member.id}>{member.firstName} {member.lastName}</li>)}
			</ul>
		)
	}
}

export default MemberList