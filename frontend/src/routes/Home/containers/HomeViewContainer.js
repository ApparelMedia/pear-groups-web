import HomeView from '../components/HomeView'
import { CREATE_USER } from 'actions/user'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  name: state.group.name,
  story: state.group.story
})

const mapDispatchToProps = {
  createUser: (event) => (dispatch) => {
    dispatch({ type: CREATE_USER })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
