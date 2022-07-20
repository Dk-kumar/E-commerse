import AboutBlock from "../AboutBlock";
import BannerBlock from "../BannerBlock";
import Footer from "../Footer";
import Header from "../Header";
import Slider from "../Slider";
import "./Home.style.scss";

const Home = () => {
  return (
    <div className="Home-Container">
      <div className="Top-Wrapper">
        <div className="Header">
          <Header />
        </div>
        <div className="Slider">
          <Slider />
        </div>
      </div>
      <div className="Body-wrapper">
        <BannerBlock />
        <AboutBlock />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
