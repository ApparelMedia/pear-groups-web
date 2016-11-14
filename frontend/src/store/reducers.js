import { combineReducers } from 'redux'
import locationReducer from './location'
import formReducer from '../reducers/forms'
import createGroupReducer from '../reducers/createGroup'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    forms: formReducer,
    group: (prevState = {}, action) => ({ ...prevState }),
    members: (prevState, action) => ({ ...prevState }),
    supporters: (prevState, action) => ({ ...prevState }),
    pears: (prevState, action) => ({ ...prevState }),
    tasks: (prevState = [], action) => {
      return [ ...prevState ]
    },
    createGroup: createGroupReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[ key ] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
