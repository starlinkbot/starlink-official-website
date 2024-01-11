import React from "react"
import "./styles.less"

const IndexComponent = (props) => {
  const { className } = props

  return (
    <div className={`m_session ${className}`} >
      <div className="m_session_container">
      {
        props.render()
      }
      </div>
    </div>
  )
}

export default IndexComponent