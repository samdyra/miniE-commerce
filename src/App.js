import "./App.css";
import MainScreen from "./screens/MainScreen";
import ShopScreen from "./screens/ShopScreen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainScreen></MainScreen>
        </Route>
        <Route exact path="/ShopScreen">
          <ShopScreen></ShopScreen>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
