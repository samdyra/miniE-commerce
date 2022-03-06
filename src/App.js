import "./App.css";
import DescScreen from "./Description/DescScreen";
import HeaderScreen from "./Header/Header";
import NavBar from "./Navbar/Navbar";
import SubsScreen from "./Subscribe/SubsScreen";

function App() {
  return (
    <>
      <div className="nav-header-background">
        <NavBar></NavBar>
        <HeaderScreen></HeaderScreen>
      </div>
      <DescScreen></DescScreen>
      <SubsScreen></SubsScreen>
    </>
  );
}

export default App;
