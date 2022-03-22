import React from "react";
import Products from "../components/mockProduct/Products";
import NavBar from "../components/Navbar/Navbar";
import { commerce } from "../lib/commerce";
import { useState, useEffect } from "react";
import Cart from "../components/Cart/Cart";

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
  // console.log(Cart);
  return (
    <>
      <NavBar></NavBar>
      <Products
        products={products}
        onAddToCart={handleAddToCart}
        totalItems={cart.total_items}
      ></Products>
      <Cart cart={cart}></Cart>
    </>
  );
};

export default ShopScreen;
