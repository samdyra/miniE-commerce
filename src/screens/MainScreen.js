import React from "react";
import DescScreen from "../components/Description/DescScreen";
import HeaderScreen from "../components/Header/Header";
import NavBar from "../components/Navbar/Navbar";
import SubsScreen from "../components/Subscribe/SubsScreen";

const MainScreen = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="nav-header-background">
        <HeaderScreen></HeaderScreen>
      </div>
      {/* <DescScreen></DescScreen>
      <SubsScreen></SubsScreen> */}
    </>
  );
};

export default MainScreen;
