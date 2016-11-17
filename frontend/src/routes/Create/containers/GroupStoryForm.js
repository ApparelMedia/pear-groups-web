import { connect } from 'react-redux'
import { changeStoryFieldValue, goToNextStep } from 'actions/create'
import GroupStory from 'components/forms/GroupStory'

const mapStateToProps = (state) => ({
  hidden: state.createGroup.currentStep.value !== 'story'
})

const mapDispatchToProps = {
  onValueChange: (event) => (dispatch) => {
    const changedInfo = {
      value: event.target.value
    }
    dispatch(changeStoryFieldValue(changedInfo))
  },
  onFormSubmit: (event) => (dispatch) => {
    event.preventDefault()
    dispatch(goToNextStep())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupStory)
