import NewArrival from "./NewArrival.component";

const NewArrivalContainer = () => {
  const newArrivalProducts = [
    {
      id: 0,
      src: "https://htmldemo.net/mimosa/mimosa/img/product/29.jpg",
      hoverSrc: "https://htmldemo.net/mimosa/mimosa/img/product/30.jpg",
      brand: "Dior",
      name: "Uopo Designs Woolrich Klettersack Backpack",
      rating: 4.5,
    },
    {
      id: 1,
      src: "https://htmldemo.net/mimosa/mimosa/img/product/28.jpg",
      hoverSrc: "https://htmldemo.net/mimosa/mimosa/img/product/27.jpg",
      brand: "IVY Moda",
      name: "Qopo Designs Woolrich Klettersack Backpack",
      rating: 4.5,
    },
    {
      id: 2,
      src: "https://htmldemo.net/mimosa/mimosa/img/product/21.jpg",
      hoverSrc: "https://htmldemo.net/mimosa/mimosa/img/product/22.jpg",
      brand: "H&M",
      name: "Lopo Designs Woolrich Klettersack Backpack",
      rating: 3,
    },
    {
      id: 3,
      src: "https://htmldemo.net/mimosa/mimosa/img/product/24.jpg",
      hoverSrc: "https://htmldemo.net/mimosa/mimosa/img/product/23.jpg",
      brand: "Chanel",
      name: "Uopo Designs Woolrich Klettersack Backpack",
      rating: 4.5,
    },
  ];

  const containerStates = {
    newArrivalProducts: newArrivalProducts,
  };

  return <NewArrival {...containerStates} />;
};

export default NewArrivalContainer;
