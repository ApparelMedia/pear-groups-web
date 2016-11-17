const defaultState = {
  name: '',
  story: ''
}

export default (prevState = defaultState, action) => {
  return { ...prevState }
}
