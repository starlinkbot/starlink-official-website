import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import {
  WebsitePage,
} from "@/page"
import { MWatch } from "@/component"
import "@/i18n"
import "./App.less"

const App = () => {
  
  return (
    <Router>
      <Route render={({ location }) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={300}
            classNames="fade"
          >
            <Switch location={location}>
              <MWatch>
                <Route path="/" component={WebsitePage} />
              </MWatch>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
    </Router>
  )
}

export default App