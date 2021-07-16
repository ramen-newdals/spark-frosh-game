import './App.css';
import { Route, HashRouter as Router, Switch } from "react-router-dom";
import {
  Header,
  Footer,
  LandingPage,
  StoryPage,
  EndingPage,
  PageNotFound
} from "./index.js";



const App = () => {
  return (
    <Router>
      <Header />
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/adventure" component={StoryPage} />
          <Route exact path="/end" component={EndingPage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
