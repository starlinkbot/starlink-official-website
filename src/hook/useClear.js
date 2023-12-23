import { useLocalStore } from "@/store"
import { storage } from "@/util"

const useClear = () => {
  const { lDispatch } = useLocalStore()

  const cleanUserInfo = () => {
    storage.clearl()
    storage.clears()
    lDispatch({key: "lToken", value: ""})
    lDispatch({key: "lInfo", value: null})
    lDispatch({key: "lHomeSummary", value: null})
    lDispatch({key: "lBotSummary", value: null})
  }

  return {
    cleanUserInfo
  }
}

export default useClear