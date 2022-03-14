import React from "react";
import DescScreen from "../components/Description/DescScreen";
import HeaderScreen from "../components/Header/Header";
import Products from "../components/mockProduct/Products";
import NavBar from "../components/Navbar/Navbar";
import SubsScreen from "../components/Subscribe/SubsScreen";
import { commerce } from "../lib/commerce";
import { useState, useEffect } from "react";

const MainScreen = () => {
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
      <div className="nav-header-background">
        <NavBar></NavBar>
        <HeaderScreen></HeaderScreen>
      </div>
      <DescScreen></DescScreen>
      <SubsScreen></SubsScreen>
      <Products></Products>
    </>
  );
};

export default MainScreen;
