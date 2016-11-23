export const SHOW_SUPPORTER_ONBOARDING = 'SHOW_SUPPORTER_ONBOARDING'
export const OPEN_TASK = 'OPEN_TASK'
export const COMPLETE_TASK = 'COMPLETE_TASK'

export const openTask = (taskIndex) => ({
  type: OPEN_TASK,
  taskIndex
})

