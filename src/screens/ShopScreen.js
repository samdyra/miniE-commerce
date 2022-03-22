import React from "react";
import Products from "../components/mockProduct/Products";
import NavBar from "../components/Navbar/Navbar";

const ShopScreen = ({ products, onAddToCart, totalItems }) => {
  // console.log(Cart);
  return (
    <>
      <NavBar></NavBar>
      <Products
        products={products}
        onAddToCart={onAddToCart}
        totalItems={totalItems}
      ></Products>
    </>
  );
};

export default ShopScreen;
