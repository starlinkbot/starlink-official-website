const reducer = (state, action) => {
  switch(action.key) {
    case "tEmail":
      return { ...state, tEmail: action.value }
    default:
      return state
  }
}

export default reducer