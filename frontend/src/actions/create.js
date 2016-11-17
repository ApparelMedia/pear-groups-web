export const CHANGE_LOCATION_FIELD_VALUE = 'CHANGE_LOCATION_FIELD_VALUE'
export const CHANGE_NAME_FIELD_VALUE = 'CHANGE_NAME_FIELD_VALUE'
export const CHANGE_TYPE_FIELD_VALUE = 'CHANGE_TYPE_FIELD_VALUE'
export const CHANGE_STORY_FIELD_VALUE = 'CHANGE_STORY_FIELD_VALUE'
export const GO_TO_NEXT_STEP = 'GO_TO_NEXT_STEP'

export const changeLocationFieldValue = ({ name, value }) => ({
  type: CHANGE_LOCATION_FIELD_VALUE,
  payload: {
    name,
    value
  }
})

export const changeNameFieldValue = (payload) => ({
  type: CHANGE_NAME_FIELD_VALUE,
  payload
})

export const changeTypeFieldValue = (payload) => ({
  type: CHANGE_TYPE_FIELD_VALUE,
  payload
})

export const changeStoryFieldValue = (payload) => ({
  type: CHANGE_STORY_FIELD_VALUE,
  payload
})

export const goToNextStep = () => ({
  type: GO_TO_NEXT_STEP
})
