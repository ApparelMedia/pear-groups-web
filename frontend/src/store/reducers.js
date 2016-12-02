import { combineReducers } from 'redux'
import locationReducer from './location'
import formReducer from '../reducers/forms'
import groupReducer from '../reducers/group'
import createGroupReducer from '../reducers/createGroup'
import tasksReducer from '../reducers/tasks'
import membersReducer from '../reducers/members'
import userReducer from '../reducers/user'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    user: userReducer,
    location: locationReducer,
    forms: formReducer,
    group: groupReducer,
    members: membersReducer,
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
