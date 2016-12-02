import { SUCCESS_LOCATE_USER } from 'actions/login'

export default (prevState = {}, action) => {
  if (action.type === SUCCESS_LOCATE_USER) {
    const results = action.payload.data.results[0];

    let newState = {
      ...prevState,
      city: results.city,
      state: results.state
    };

    return newState
  }

  return prevState
}
