import "./SubsStyle.css";

const SubsScreen = () => {
  return (
    <div className="subs-container">
      <div className="line-style">
        <div className="line-1"></div>
        <div className="subs-style">
          <div className="newsletter">
            <p>Subscribe Our Newsletter</p>
          </div>
          <div>
            <form>
              <input
                className="news-form"
                type="text"
                placeholder="Email Address"
              ></input>
            </form>
          </div>
          <div className="subs-btn">
            <p type="button">Subscribe</p>
          </div>
        </div>
        <div className="line-2"></div>
      </div>
    </div>
  );
};

export default SubsScreen;
