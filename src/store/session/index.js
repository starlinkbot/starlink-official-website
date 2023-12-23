import React, { createContext, useReducer, useContext } from "react"
import reducer from "./reducer"
import { storage } from "@/util"

export const initState = {
  sTest: storage.gets("sTest"),
}

const ConfigCtx = createContext(null)

export const Provider = props => {
  const [sState, sDispatch] = useReducer(reducer, initState)
  return <ConfigCtx.Provider value={{ sState, sDispatch }}>{ props.children }</ConfigCtx.Provider>
}

export const useSessionStore = () => useContext(ConfigCtx)