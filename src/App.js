import "./App.css";
import MainScreen from "./screens/MainScreen";
import ShopScreen from "./screens/ShopScreen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CartScreen from "./screens/CartScreen";

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
        <Route exact path="/CartScreen">
          <CartScreen></CartScreen>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
