import "./Footer.style.scss";

const Footer = (props) => {
  const FooterHeader = () => {
    return (
      <div className="Footer-Wrapper">
        <span className="Subscribers">Special Offers For Subscribers</span>
        <span className="Discount">
          <p>Ten Percent Member Discount</p>
        </span>
        <span className="Description">
          Subscribe to our newsletters now and stay up to date with new
          collections, the latest lookbooks and exclusive offers.
        </span>
        {renderInput()}
      </div>
    );
  };

  const renderInput = () => {
    return (
      <>
        <div className="Subscribe-Input">
          <input placeholder="Enter your email" />
          <button className="Subscribe-Btn" type="button">
            Subscribe
          </button>
        </div>
        {FooterBottom()}
      </>
    );
  };

  const FooterBottom = () => {
    return (
      <span className="Copy-Rights">
        © 2022 Oscar Leo Made with<span className="Heart">♥</span>by
        <span className="Author-Name">DK</span>
      </span>
    ); 
  };

  const render = () => {
    return <div className="Footer-Container">{FooterHeader()}</div>;
  };

  return render();
};

export default Footer;
