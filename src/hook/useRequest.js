/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Toast } from "antd-mobile"
import { useRoute, useClear } from "@/hook"
import { post, upload } from "@/service"

const UNLOGINPAGE = ["/start", "/login", "/signup"]

const useRequest = (url, params={}) => {
  const location = useLocation()
  const { push } = useRoute()
  const { cleanUserInfo } = useClear()
  const { pathname } = location
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const request = async (_url, _params={}, _load=true, _error=true, _toast=false) => {
    try {
      _toast && Toast.show({
        icon: "loading",
        content: "Loading...",
        duration: 0
      })
      _load && setLoading(true)
      const resp = await post(_url, _params)
      _load && setLoading(false)
      _toast && Toast.clear()
      setData(resp)
      return resp
    } catch (error) {
      if (error.code === 90004 && !UNLOGINPAGE.some(prefix => pathname.startsWith(prefix))) {
        cleanUserInfo()
        push("/start")
      } else {
        setError(error)
        _load && setLoading(false)
        _error && Toast.show({
          icon: "fail",
          content: error.message
        })
      }
      return {
        error: true,
        code: error.code,
        desc: error.message
      }
    }
  }

  const requestNotLoading = async (_url, _params={}) => {
    return request(_url, _params, false, true, false)
  }

  const requestNotError = async (_url, _params={}) => {
    return request(_url, _params, true, false, false)
  }

  const requestWithToast = async (_url, _params={}) => {
    return request(_url, _params, true, true, true)
  }
  
  const requestNotLoadingAndError = async (_url, _params={}) => {
    return request(_url, _params, false, false, false)
  }

  const requestWithToastNotError = async (_url, _params={}) => {
    return request(_url, _params, true, false, true)
  }


  useEffect(() => {
    !!url && request(url, params)
  }, [url])

  return {
    data, loading, error, 
    request,
    requestNotLoading,
    requestNotError,
    requestWithToast,
    requestNotLoadingAndError,
    requestWithToastNotError,
    upload
  }
}

export default useRequest