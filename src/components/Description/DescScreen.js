import "./DescStyle.css";
import forHim from "../../assets/images/forhim.png";

const DescScreen = () => {
  return (
    <div className="desc-container">
      <div className="wrapper-desc">
        <h1 className="heading-desc">New Arrival</h1>
        <div className="product-wrapper">
          <div className="product-desc">
            <img src={forHim} className="logoForHim"></img>
            <h2 className="forhim-text">For Him</h2>
            <h1 className="product-price">Rp249.000</h1>
            <p className="buynow-tag">BUY NOW</p>
          </div>
          <div className="product-desc">
            <img src={forHim} className="logoForHim"></img>
            <h2 className="forhim-text">For Him</h2>
            <h1 className="product-price">Rp249.000</h1>
            <p className="buynow-tag">BUY NOW</p>
          </div>
          <div className="product-desc">
            <img src={forHim} className="logoForHim"></img>
            <h2 className="forhim-text">For Him</h2>
            <h1 className="product-price">Rp249.000</h1>
            <p className="buynow-tag">BUY NOW</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescScreen;
