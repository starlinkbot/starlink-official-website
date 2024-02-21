import { withRouter } from "react-router-dom"
import { Button } from "antd"
import { MSession } from "@/component"
import { IMAGE } from "@/assets"
import { useTranslation } from "react-i18next"
import { useRequest } from "@/hook"
import "./styles.less"

const IndexPage = ({ history }) => {
  const { t } = useTranslation()
  const { data, loading } = useRequest("app/home/app_check_update")
  
  return (
    <div className="p_website">
      <MSession 
        className="p_website_white"
        render={() => (
          <div className="p_website_navbar">
            <img src={IMAGE.logo} alt="" draggable="false" />
          </div>
        )}
      />
      <MSession 
        className="p_website_white"
        render={() => (
          <div className="p_website_start">
            <div className="p_website_start_content">
              <p className="start_title">{t("website.start.title")}</p>
              <p className="start_desc">{t("website.start.desc")}</p>
              <Button loading={loading} className="start_button" style={{display: "none"}} onClick={() => {
                if (!!data) {
                  window.open(data.download)
                } else {
                  window.open("https://starlinkbot.s3.ap-southeast-1.amazonaws.com/download/starlink0.9.8.apk")
                }
              }}>{t("website.start.button")}</Button>
            </div>
            <img src={IMAGE.start} alt="" draggable="false" />
          </div>
        )}
      />
      <MSession 
        className="p_website_gray"
        render={() => (
          <div className="p_website_platform">
            <p className="platform_title">{t("website.platform.title")}</p>
            <p className="platform_content">{t("website.platform.content")}</p>
            <div className="platform_desc">
              <div className="platform_desc_line" />
              <p>{t("website.platform.work")}</p>
              <div className="platform_desc_line" />
            </div>
            <div className="platform_images">
            {
              new Array(10).fill(undefined).map((_, index) => {
                return <img src={IMAGE[`platform_${index + 1}`]} alt="" draggable="false" key={index} />
              })
            }
            </div>
          </div>
        )}
      />
      <MSession 
        className="p_website_black"
        render={() => (
          <div className="p_website_partner">
            <p className="partner_title">{t("website.partner.title")}</p>
            <div className="partner_list">
            {
              new Array(3).fill(undefined).map((_, index) => {
                return <div key={index} className="partner_item">
                  <img src={IMAGE[`partner_${index + 1}`]} alt="" draggable="false" />
                  <p className="partner_item_value">{ t(`website.partner.item.v${index + 1}`) }</p>
                  <p className="partner_item_key">{ t(`website.partner.item.k${index + 1}`) }</p>
                </div>
              })
            }
            </div>
            <img src={IMAGE.partner_map} alt="" draggable="false" className="partner_map" />
            <Button className="partner_button" onClick={() => window.open("mailto:inquire@starlinkbot.net")}>{t("website.partner.button")}</Button>
          </div>
        )}
      />
      <MSession 
        className="p_website_white"
        render={() => (
          <div className="p_website_foot">
            <p>{t("website.foot.reserved")}</p>
            <div className="foot_menu">
              <img src={IMAGE.foot_1} alt="" draggable="false" />
              <img src={IMAGE.foot_2} alt="" draggable="false" />
              <img src={IMAGE.foot_3} alt="" draggable="false" />
              <img src={IMAGE.foot_4} alt="" draggable="false" />
            </div>
          </div>
        )}
      />
    </div>
  )
}
export default withRouter(IndexPage)