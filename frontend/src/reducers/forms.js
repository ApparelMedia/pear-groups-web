import { CHANGE_LOCATION_FIELD_VALUE, CHANGE_NAME_FIELD_VALUE } from 'actions/create'

const defaultFormsState = {
  create: {
    groupName: {
      name: ''
    },
    location: {
      city: '',
      state: ''
    },
    type: {
      value: ''
    },
    story: {
      value: ''
    },
    photo: {
      value: ''
    }
  }
}

export default (prevState = defaultFormsState, action) => {
  if (action.type === CHANGE_LOCATION_FIELD_VALUE) {
    let name = action.payload.name
    let value = action.payload.value
    let newState = Object.assign({}, prevState)
    newState.create.location[ name ] = value
    return newState;
  }

  if (action.type === CHANGE_NAME_FIELD_VALUE) {
    let value = action.payload.value
    let newState = Object.assign({}, prevState)
    newState.create.groupName.name = value
    return newState;
  }
  return { ...prevState }
}

