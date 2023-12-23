import { useRequest } from "@/hook"
import { useLocalStore } from "@/store"

const useInfo = () => {
  const { requestNotLoadingAndError } = useRequest()
  const { lDispatch } = useLocalStore()
  
  const initUserInfo = async () => {
    const infoResp = await requestNotLoadingAndError("app/account/infoV3")
    if (!infoResp?.error) {
      lDispatch({key: "lInfo", value: infoResp})
    } 
  }

  return {
    initUserInfo
  }
}

export default useInfo