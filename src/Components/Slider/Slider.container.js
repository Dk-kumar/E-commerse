/* eslint-disable no-undef */
import Slider from "./Slider.component";

const SliderContainer = () => {
  const sliderData = [
    {
      id: 0,
      text: (
        <span>
          <p>
            Clothing
            <br />
            Exclusive Collection
          </p>
          <span>
            Typi non habent claritatem insitam est usus legentis in iis qui
            facit eorum
            <br />
            claritatem.
          </span>
        </span>
      ),
      src: "https://htmldemo.net/mimosa/mimosa/img/slider/4.jpg",
    },
    {
      id: 1,
      text: (
        <span>
          <p>
            Accessories
            <br />
            Explore Trending
          </p>
          <span>
            Typi non habent claritatem insitam est usus legentis in iis qui
            facit eorum
            <br />
            claritatem.
          </span>
        </span>
      ),
      src: "https://htmldemo.net/mimosa/mimosa/img/slider/5.jpg",
    },
    {
      id: 2,
      text: (
        <span>
          <p>
            Bag
            <br />
            Lookbook
          </p>
          <span>
            Discover the collection as styled by fashion icon Caroline Issa in
            our new season <br />
            campaign.
          </span>
        </span>
      ),
      src: "https://htmldemo.net/mimosa/mimosa/img/slider/6.jpg",
    },
  ];

  const containerStates = {
    sliderData: sliderData,
  };
  

  return <Slider {...containerStates} />;
};

export default SliderContainer;
