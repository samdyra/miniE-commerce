import "./App.css";
import DescScreen from "./Description/DescScreen";
import HeaderScreen from "./Header/Header";
import Products from "./mockProduct/Products";
import NavBar from "./Navbar/Navbar";
import SubsScreen from "./Subscribe/SubsScreen";
import { commerce } from "./lib/commerce";
import { useState, useEffect } from "react";

function App() {
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
}

export default App;
