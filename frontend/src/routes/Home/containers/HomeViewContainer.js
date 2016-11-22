import HomeView from '../components/HomeView'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  name: state.group.name,
  story: state.group.story
})

export default connect(mapStateToProps)(HomeView)
