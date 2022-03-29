import "./App.css";
import MainScreen from "./screens/MainScreen";
import ShopScreen from "./screens/ShopScreen";
import Checkout from "./components/CheckoutForm/Checkout/Checkout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import { commerce } from "./lib/commerce";
import { useState, useEffect } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const response = await commerce.cart.add(productId, quantity);
    setCart(response.cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });
    setCart(response.cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const response = await commerce.cart.remove(productId);
    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();
    setCart(response.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainScreen></MainScreen>
        </Route>
        <Route exact path="/ShopScreen">
          <ShopScreen
            products={products}
            onAddToCart={handleAddToCart}
            totalItems={cart.total_items}
          ></ShopScreen>
        </Route>
        <Route exact path="/CartScreen">
          <CartScreen
            cart={cart}
            handleUpdateCartQty={handleUpdateCartQty}
            handleRemoveFromCart={handleRemoveFromCart}
            handleEmptyCart={handleEmptyCart}
          ></CartScreen>
        </Route>
        <Route exact path="/CheckoutScreen">
          <Checkout cart={cart}></Checkout>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
