import "./DescStyle.css";
import productImage from "../assets/images/product 1.svg";

const DescScreen = () => {
  return (
    <div className="desc-container">
      <div className="wrapper">
        <h1>What is Stella Felice?</h1>
        <img src={productImage}></img>
      </div>
    </div>
  );
};

export default DescScreen;
