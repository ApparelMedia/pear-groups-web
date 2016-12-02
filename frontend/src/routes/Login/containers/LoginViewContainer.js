import LoginView from '../components/LoginView'
import { connect } from 'react-redux'
import { requestLocateUser } from 'actions/login'

const mapStateToProps = (state) => ({
  city: state.user.city,
  state: state.user.state
})

const mapDispatchToProps = (dispatch) => ({
  locateMeOnClick: (event) => {
    event.preventDefault()
    dispatch(requestLocateUser())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginView)
