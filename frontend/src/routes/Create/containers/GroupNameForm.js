import { connect } from 'react-redux'
import { changeNameFieldValue, goToNextStep } from 'actions/create'
import GroupName from '../components/GroupName'

const mapStateToProps = (state) => ({
  name: state.forms.create.groupName.name,
  hidden: state.createGroup.currentStep.value !== 'name'
})

const mapDispatchToProps = (dispatch) => ({
  onNameChange: (event) => {
    const changedInfo = {
      value: event.target.value
    }
    dispatch(changeNameFieldValue(changedInfo))
  },
  onFormSubmit: (event) => {
    event.preventDefault()
    dispatch(goToNextStep())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupName)
