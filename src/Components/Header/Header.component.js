/* eslint-disable jsx-a11y/anchor-is-valid */
import { searchIcon, cartIcon, profileIcon } from "../../Utils/Svg";
import "./Header.style.scss";

const Header = (props) => {
  const renderNavBar = () => {
    return (
      <nav className="Nav-Wrapper">
        <a href="#" className="Active">
          Home
        </a>
        <a href="#">Men</a>
        <a href="#">Accessories</a>
        <a href="#">Pages</a>
      </nav>
    );
  };

  const renderLogo = () => {
    return (
      <div className="Heading">
        <p>MIMOSA</p>
      </div>
    );
  };

  const icons = () => {
    return (
      <div className="Icons-Wrapper">
        <i>{searchIcon()}</i>
        <i>{cartIcon()}</i>
        <i>{profileIcon()}</i>
      </div>
    );
  };

  const render = () => {
    const { offset } = props;
    return (
      <div className="Header-Container">
        <header className={`Header-Wrapper ${offset >= 600 ? "Nav-Bar-Bg" : ''}`}>
          {renderNavBar()}
          {renderLogo()}
          {icons()}
        </header>
      </div>
    );
  };

  return <>{render()}</>;
};

export default Header;
