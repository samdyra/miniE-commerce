import shopImage from "../../assets/images/Subtract.svg";
import stellaImage from "../../assets/images/Alternate logo 2 1.svg";
import "./Navbar.css";

const NavBar = () => {
  return (
    <div className="nav-container">
      <div className="wrapper-navigation">
        <nav>
          <div>
            <img src={stellaImage} className="logo"></img>
          </div>
          <ul className="nav-items">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
            <li>
              <a className="nav-btn-container">
                <img src={shopImage} className="shop-btn"></img>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
