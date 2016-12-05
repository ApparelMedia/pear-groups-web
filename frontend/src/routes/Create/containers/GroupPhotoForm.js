import { connect } from 'react-redux'
import { changeStoryFieldValue, goToNextStep } from 'actions/create'
import GroupPhoto from 'components/forms/GroupPhoto'

const mapStateToProps = (state) => ({
  hidden: state.createGroup.currentStep.value !== 'photo'
})

const mapDispatchToProps = (dispatch) => ({
  onValueChange: (event) => {
    const changedInfo = {
      value: event.target.value
    }
    dispatch(changeStoryFieldValue(changedInfo))
  },
  onFormSubmit: (event) => {
    event.preventDefault()
    dispatch(goToNextStep())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupPhoto)
