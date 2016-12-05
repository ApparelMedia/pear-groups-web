import { connect } from 'react-redux'
import CityState from 'components/forms/CityState'
import { changeLocationFieldValue, goToNextStep } from 'actions/create'

const mapStateToProps = (state) => ({
  city: state.forms.create.location.city,
  state: state.forms.create.location.state,
  hidden: state.createGroup.currentStep.value !== 'location'
})

const mapDispatchToProps = (dispatch) => ({
  cityChange: (event) => {
    const changedInfo = {
      name: event.target.name,
      value: event.target.value
    }
    dispatch(changeLocationFieldValue(changedInfo))
  },
  stateChange: (value) => {
    const changedInfo = {
      name: 'state',
      value
    }
    dispatch(changeLocationFieldValue(changedInfo))
  },
  submitForm: (event) => {
    event.preventDefault()
    dispatch(goToNextStep())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CityState)
