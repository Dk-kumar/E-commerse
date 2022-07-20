import BannerBlock from "./BannerBlock.component";

import ship from "../../Utils/Images/ship.webp";
import Pig from "../../Utils/Images/Pig.webp";
import support from "../../Utils/Images/support.webp";

const BannerBlockContainer = () => {
  const bannerBlockData = [
    {
      id: 1,
      src: ship,
      title: "Free Shipping Worldwide",
      content: (
        <span>
          Mirum est notare quam littera gothica, quam nunc <br /> putamus parum
          claram
        </span>
      ),
    },
    {
      id: 2,
      src: Pig,
      title: "Money Back Guarantee",
      content: (
        <span>
          Mirum est notare quam littera gothica, quam nunc <br /> putamus parum
          claram
        </span>
      ),
    },
    {
      id: 3,
      src: support,
      title: "Whats'up Support 24/7",
      content: (
        <span>
          Mirum est notare quam littera gothica, quam nunc <br /> putamus parum
          claram
        </span>
      ),
    },
  ];

  const containerStates = {
    bannerBlockData: bannerBlockData,
  };

  return <BannerBlock {...containerStates} />;
};

export default BannerBlockContainer;
