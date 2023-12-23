import { useEffect, useState } from "react"
import { theWindow } from "@/util"

const DARKPAGE = ["/lease", "/invite"]
const GRAYPAGE = ["/rewards", "/rewardsDetail"]
const SPECIALPAGE = ["/deposit"]

const Watch = (props) => {
  const [color, setColor] = useState(theWindow.getComputedStyle("--background_primary_color"))

  useEffect(() => {
    document.body.scrollIntoView()
    const pathname = props.location.pathname
    if (DARKPAGE.some(prefix => pathname.startsWith(prefix))) {
      setColor(theWindow.getComputedStyle("--primary_color"))
    } else if (GRAYPAGE.some(prefix => pathname.startsWith(prefix))) {
      setColor(theWindow.getComputedStyle("--background_fourtiary_color"))
    } else if (!SPECIALPAGE.some(prefix => pathname.startsWith(prefix))) {
      setColor(theWindow.getComputedStyle("--background_primary_color"))
    }
  }, [props.location.pathname])

  useEffect(() => {
    theWindow.setStatusBarColor(color)
    const brightness = 
      color === theWindow.getComputedStyle("--primary_color")
      ? "light"
      : "dark"
    theWindow.setStatusBarIconBrightness(brightness) 
  }, [color])
  
  return (
    props.children
  )
}
export default Watch