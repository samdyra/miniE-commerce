import "./App.css";
import DescScreen from "./Descripiton/DescScreen";
import HeaderScreen from "./Header/Header";
import NavBar from "./Navbar/Navbar";

function App() {
  return (
    <>
      <div className="nav-header-background">
        <NavBar></NavBar>
        <HeaderScreen></HeaderScreen>
      </div>
      <DescScreen></DescScreen>
    </>
  );
}

export default App;
