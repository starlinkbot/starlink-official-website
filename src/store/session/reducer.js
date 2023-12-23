import { storage } from "@/util"

const reducer = (state, action) => {
  storage.sets(action.key, action.value)
  switch(action.key) {
    case "sTest":
      return { ...state, sTest: action.value }
    default:
      return state
  }
}

export default reducer