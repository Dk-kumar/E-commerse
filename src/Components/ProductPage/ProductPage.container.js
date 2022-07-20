import { useState } from "react";
import ProductPage from "./ProductPage.component";

const ProductPageContainer = (props) => {
  const [isHover, setIsHover] = useState({});

  const containerStates = {
    isHover: isHover,
  };

  const handleHoverEvent = (key, value) => {
    setIsHover({
      ...isHover,
      [key]: value,
    });
  };

  const containerFunctions = {
    handleHoverEvent: (key, value) => handleHoverEvent(key, value),
  };

  return (
    <ProductPage {...containerStates} {...containerFunctions} {...props} />
  );
};

export default ProductPageContainer;
