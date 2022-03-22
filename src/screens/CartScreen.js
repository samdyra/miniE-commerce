import React from "react";
import Cart from "../components/Cart/Cart";
import NavBar from "../components/Navbar/Navbar";

const CartScreen = ({ cart }) => {
  return (
    <>
      <NavBar></NavBar>
      <Cart cart={cart}></Cart>
    </>
  );
};

export default CartScreen;
