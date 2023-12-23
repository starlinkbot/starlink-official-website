import { storage } from "@/util"

const reducer = (state, action) => {
  storage.setl(action.key, action.value)
  switch(action.key) {
    case "lToken":
      return { ...state, lToken: action.value }
    default:
      return state
  }
}

export default reducer