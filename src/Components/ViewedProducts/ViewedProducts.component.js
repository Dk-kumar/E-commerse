/* eslint-disable jsx-a11y/anchor-is-valid */

import ProductPage from "../ProductPage";
import "./ViewedProducts.style.scss";

const ViewedProducts = (props) => {
  const renderHeading = () => {
    return (
      <div className="Heading-wrapper">
        <p className="Title">Most Viewed Products</p>
        <span className="Discription">
          Mirum est notare quam littera gothica, quam nunc putamus parum claram{" "}
          <br /> anteposuerit litterarum formas.
        </span>
      </div>
    );
  };

  const tabMenu = () => {
    const { menus, productData } = props;
    return (
      <>
        <nav className="Menus">
          {menus.map((tabs) => {
            return (
              <a key={tabs.id} className="Tab" href="#">
                {tabs.heading}
              </a>
            );
          })}
        </nav>
        <ProductPage productData={productData} />
      </>
    );
  };

  const render = () => {
    return (
      <div className="ViewedProducts-Continer">
        {renderHeading()}
        {tabMenu()}
      </div>
    );
  };

  return <>{render()}</>;
};

export default ViewedProducts;
