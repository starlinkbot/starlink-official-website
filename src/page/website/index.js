import { withRouter } from "react-router-dom"
import { Button } from "antd-mobile"
import { IMAGE } from "@/assets"
import "./styles.less"

const IndexPage = ({ history }) => {
  
  return (
    <div className="p_website">
      <div className="p_website_container">
        <img src={IMAGE.website_logo} alt="" className="logo" />
        <p className="title">Building <br /> the Future of <br /> Edge Data Network, Together</p>
        <p className="content">Share Your Bandwidth, <br /> Grow Your Wallet</p>
        <Button className="start" onClick={() => { window.open("https://www.starlink.bot/dl/starlink0.9.7.apk") }}>Start Now</Button>
        <img src={IMAGE.website_image} alt="" className="image" />
      </div>
    </div>
  )
}
export default withRouter(IndexPage)
