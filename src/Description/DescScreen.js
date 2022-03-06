import "./DescStyle.css";
import productImage from "../assets/images/product 1.svg";

const DescScreen = () => {
  return (
    <div className="desc-container">
      <div className="wrapper-desc">
        <h1 className="heading-desc">What is Stella Felice?</h1>
        <img src={productImage} className="product-image"></img>
      </div>
    </div>
  );
};

export default DescScreen;
