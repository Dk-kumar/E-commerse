import "./AboutBlock.style.scss";

const AboutBlock = () => {
  const renderContent = () => {
    return (
      <div className="AboutBlock-Wrapper">
        {/* <p>hello</p> */}
      </div>
    );
  };

  const render = () => {
    return <div className="AboutBlock-Container">{renderContent()}</div>;
  };

  return render();
};

export default AboutBlock;
