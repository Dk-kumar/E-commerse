import ViewedProducts from "./ViewedProducts.component";

const ViewedProductsContainer = () => {
  const menus = [
    {
      id: 1,
      heading: "All",
    },
    {
      id: 2,
      heading: "Men",
    },
    {
      id: 3,
      heading: "Women",
    },
    {
      id: 4,
      heading: "Kids",
    },
  ];

  const productData = [
    {
      id: 0,
      name: "Aopo Designs Woolrich Klettersack Backpack",
      brand: "Armani",
      src: "https://htmldemo.net/mimosa/mimosa/img/product/2.jpg",
      ratings: 4.5,
    },
    {
      id: 1,
      name: "Copo Designs Woolrich Klettersack Backpack",
      brand: "Prada",
      src: "https://htmldemo.net/mimosa/mimosa/img/product/3.jpg",
      ratings: 5,
    },
    {
      id: 2,
      name: "Dopo Designs Woolrich Klettersack Backpack",
      brand: "H&M ",
      src: "https://htmldemo.net/mimosa/mimosa/img/product/7.jpg",
      ratings: 4.5,
    },
    {
      id: 3,
      name: "Aopo Designs Woolrich Klettersack Backpack",
      brand: "Chanel",
      src: "https://htmldemo.net/mimosa/mimosa/img/product/2.jpg",
      ratings: 5,
    },
    {
      id: 4,
      name: "Kopo Designs Woolrich Klettersack Backpack",
      brand: "IVY Moda",
      src: "https://htmldemo.net/mimosa/mimosa/img/product/19.jpg",
      ratings: 2.5,
    },
    {
      id: 5,
      name: "Iopo Designs Woolrich Klettersack Backpack",
      brand: "Armani",
      src: "https://htmldemo.net/mimosa/mimosa/img/product/18.jpg",
      ratings: 3,
    },
    {
      id: 6,
      src: "https://htmldemo.net/mimosa/mimosa/img/product/21.jpg",
      brand: "H&M",
      name: "Lopo Designs Woolrich Klettersack Backpack",
      rating: 3,
    },
    {
      id: 7,
      src: "https://htmldemo.net/mimosa/mimosa/img/product/24.jpg",
      brand: "Chanel",
      name: "Uopo Designs Woolrich Klettersack Backpack",
      rating: 4.5,
    },
  ];

  const containerStates = {
    menus: menus,
    productData: productData,
  };

  return <ViewedProducts {...containerStates} />;
};

export default ViewedProductsContainer;
