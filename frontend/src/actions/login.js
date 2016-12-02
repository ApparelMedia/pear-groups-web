export const LOCATE_USER = 'LOCATE_USER'
export const START_LOCATE_USER = 'START_LOCATE_USER'
export const SUCCESS_LOCATE_USER = 'SUCCESS_LOCATE_USER'
export const ERROR_LOCATE_USER = 'ERROR_LOCATE_USER'
export const COMPLETE_LOCATE_USER = 'COMPLETE_LOCATE_USER'

export const locateUser = (payload) => ({
  type: LOCATE_USER,
  payload
})

export const startLocateUser = () => ({
  type: START_LOCATE_USER
})

export const successLocateUser = (payload) => ({
  type: SUCCESS_LOCATE_USER,
  payload
})

export const errorLocateUser = (payload) => ({
  type: ERROR_LOCATE_USER,
  payload
})

export const completeLocateUser = () => ({
  type: COMPLETE_LOCATE_USER
})

export const requestLocateUser = (payload) => (dispatch) => {
  dispatch(startLocateUser())

  return fetch('https://zipcodes-api.pearup.com/api/zips/reverse_geocode?lat=37.754903&long=-122.444475')
    .then((response) => {
      return response.json()
    })
    .then((payload) => {
      dispatch(successLocateUser(payload))
      dispatch(completeLocateUser())
    })
    .catch((payload) => {
      dispatch(errorLocateUser(payload))
    })
}
