import shopImage from "../assets/images/Subtract.svg";

const NavBar = () => {
  return (
    <div className="nav-container">
      <div className="wrapper">
        <nav>
          <div className="logo"></div>
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
