import TopNav from 'components/TopNav'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  group: state.group.name !== ''
})

//
export default connect(mapStateToProps, null, null, { pure: false })(TopNav)
