/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"
import { post, upload } from "@/service"
// import { message } from "antd"

const useRequest = (url, params={}) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const request = async (_url, _params={}) => {
    try {
      setLoading(true)
      const resp = await post(_url, _params)
      setLoading(false)
      setData(resp)
      return resp
    } catch (error) {
      setError(error)
      setLoading(false)
      // message.error(error.message)
      return {
        error: true,
        code: error.code,
        desc: error.message
      }
    }
  }


  useEffect(() => {
    !!url && request(url, params)
  }, [url])

  return {
    data, loading, error, 
    request,
    upload
  }
}

export default useRequest