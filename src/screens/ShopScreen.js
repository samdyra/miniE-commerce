import React from "react";
import Products from "../components/mockProduct/Products";
import NavBar from "../components/Navbar/Navbar";
import { commerce } from "../lib/commerce";
import { useState, useEffect } from "react";

const ShopScreen = () => {
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
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);

  return (
    <>
      <NavBar></NavBar>
      <Products products={products} onAddToCart={handleAddToCart}></Products>
    </>
  );
};

export default ShopScreen;
