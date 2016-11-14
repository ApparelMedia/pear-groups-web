import { GO_TO_NEXT_STEP } from 'actions/create'
import CreationSteps from 'constants/GroupCreationSteps'

const defaultState = {
  currentStep: {
    index: 0,
    value: CreationSteps[ 0 ].value
  }
}

export default (prevState = defaultState, action) => {
  if (action.type === GO_TO_NEXT_STEP) {
    const nextIndex = prevState.currentStep.index + 1
    return {
      ...prevState,
      currentStep: {
        index: nextIndex,
        value: CreationSteps[ nextIndex ].value
      }
    }
  }
  return { ...prevState }
}

