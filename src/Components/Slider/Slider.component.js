import { Fade } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";
import "./Slider.style.scss";

const Slider = (props) => {
  const renderSlider = () => {
    const { sliderData } = props;
    return (
      <Fade>
        {sliderData.map((res) => {
          return (
            <div className="each-slide-effect">
              <div
                style={{ backgroundImage: `url(${res.src})` }}
                className="image-container"
              >
                {res.text}
              </div>
            </div>
          );
        })}
      </Fade>
    );
  };

  const render = () => {
    return <div className="Slider-Container">{renderSlider()}</div>;
  };

  return render();
};

export default Slider;
