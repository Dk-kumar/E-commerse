import NewArrival from "../NewArrival";
import ViewedProducts from "../ViewedProducts";
import "./BannerBlock.style.scss";

const BannerBlock = (props) => {
  const render = () => {
    const { bannerBlockData } = props;
    return (
      <>
        <div className="BannerBlock ">
          {bannerBlockData.map((res) => {
            return (
              <div key={res.id} className="Container-Wrapper">
                <img className="Image" src={res.src} alt="ship" />
                <p className="Title">{res.title}</p>
                <span className="Discription">{res.content}</span>
              </div>
            );
          })}
        </div>
        <ViewedProducts />
        <NewArrival />
      </>
    );
  };

  return <div className="BannerBlock-Container">{render()}</div>;
};

export default BannerBlock;
