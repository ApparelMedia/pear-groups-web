import MemberList from 'components/MemberList'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  members: state.members
})

export default connect(mapStateToProps)(MemberList)
