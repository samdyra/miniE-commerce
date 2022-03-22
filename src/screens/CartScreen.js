import React from "react";
import Cart from "../components/Cart/Cart";
import NavBar from "../components/Navbar/Navbar";

const CartScreen = ({
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
}) => {
  return (
    <>
      <NavBar></NavBar>
      <Cart
        cart={cart}
        handleUpdateCartQty={handleUpdateCartQty}
        handleRemoveFromCart={handleRemoveFromCart}
        handleEmptyCart={handleEmptyCart}
      ></Cart>
    </>
  );
};

export default CartScreen;
