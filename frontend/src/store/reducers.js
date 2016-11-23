import { combineReducers } from 'redux'
import locationReducer from './location'
import formReducer from '../reducers/forms'
import groupReducer from '../reducers/group'
import createGroupReducer from '../reducers/createGroup'
import tasksReducer from '../reducers/tasks'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    forms: formReducer,
    group: groupReducer,
    members: (prevState = [], action) => { 
      return [ ...prevState ]
    },
    supporters: (prevState, action) => ({ ...prevState }),
    pears: (prevState, action) => ({ ...prevState }),
    tasks: tasksReducer,
    createGroup: createGroupReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[ key ] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
