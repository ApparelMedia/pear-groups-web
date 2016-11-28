import { OPEN_TASK } from 'actions/rally'

const defaultFormsState = []

export default (prevState = defaultFormsState, action) => {
  if (action.type === OPEN_TASK) {
    const newState = prevState.map((task, i) => {
      task.open = i === (action.taskIndex - 1)

      return task
    })

    return newState;
  }

  return [ ...prevState ]
}

