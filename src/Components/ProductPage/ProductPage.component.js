/* eslint-disable jsx-a11y/anchor-is-valid */

import "./ProductPage.style.scss";

const ProductPage = (props) => {
  const renderProducts = () => {
    const { productData, isHover, handleHoverEvent } = props;

    return (
      <div className="Product-Container">
        {productData.map((productData, index) => {
          return (
            <div key={productData.id} className="Product-Wrapper">
              <div className="Product-Image">
                <img
                  src={isHover[index] ? productData.hoverSrc : productData.src}
                  alt="img"
                  onMouseEnter={() =>
                    productData.hoverSrc && handleHoverEvent(index, true)
                  }
                  onMouseOut={() =>
                    productData.hoverSrc && handleHoverEvent(index, false)
                  }
                />
              </div>
              <div className="Top">
                <span className="Brand-Name">{productData.brand}</span>
              </div>
              <span className="Product-Name">
                <p>{productData.name}</p>
              </span>
            </div>
          );
        })}
      </div>
    );
  };

  const render = () => {
    return <div className="ProductPage-Continer">{renderProducts()}</div>;
  };

  return <>{render()}</>;
};

export default ProductPage;
