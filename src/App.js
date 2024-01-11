import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import {
  WebsitePage,
  NotfoundPage
} from "@/page"
import "@/i18n"
import "./App.less"

const App = () => {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={WebsitePage} />
        <Route path="/*" component={NotfoundPage} />
      </Switch>
    </Router>
  )
}

export default App