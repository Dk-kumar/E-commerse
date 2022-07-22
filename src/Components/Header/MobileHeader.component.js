/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  smlSearchIcon,
  smlCartIcon,
  smlUserIcon,
  menuIcon,
} from "../../Utils/Svg";
import logo from "../../Utils/Images/LOGO.png";

const MobileHeader = (props) => {
  const SideNav = () => {
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

  const renderMenu = () => {
    return <div className="Menu-Icon">{menuIcon()}</div>;
  };

  const renderLogo = () => {
    return (
      <div className="Heading">
        <img className="Logo" src={logo} alt="logo" />
        <p>OSCAR LEO</p>
      </div>
    );
  };

  const renderIcons = () => {
    return (
      <div className="Mob-Icons-Wrapper">
        <div className="searchIcon">{smlSearchIcon()}</div>
        <div className="cartIcon">{smlCartIcon()}</div>
        <div className="profileIcon">{smlUserIcon()}</div>
      </div>
    );
  };

  const render = () => {
    const { offset } = props;
    return (
      <div className="MobileHeader-Container">
        <div className={`Nav-Wrapper ${offset >= 200 ? "Nav-Bar-Bg" : ""}`}>
          {renderMenu()}
          {renderLogo()}
          {renderIcons()}
        </div>
      </div>
    );
  };

  return render();
};

export default MobileHeader;
