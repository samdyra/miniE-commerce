import React from "react";
import Products from "../components/mockProduct/Products";
import NavBar from "../components/Navbar/Navbar";
import { commerce } from "../lib/commerce";
import { useState, useEffect } from "react";

const ShopScreen = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);
  return (
    <>
      <NavBar></NavBar>
      <Products products={products}></Products>
    </>
  );
};

export default ShopScreen;
