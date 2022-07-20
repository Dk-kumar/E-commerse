import ProductPage from "../ProductPage";
import "./NewArrival.style.scss";

const NewArrival = (props) => {
  const renderHeading = () => {
    const { newArrivalProducts } = props;
    return (
      <>
        <div className="Heading-wrapper">
          <p className="Title">New Arrival</p>
          <span className="Discription">
            Mirum est notare quam littera gothica, quam nunc putamus parum
            claram <br /> anteposuerit litterarum formas.
          </span>
        </div>
        <ProductPage productData={newArrivalProducts} />
      </>
    );
  };

  const render = () => {
    return (
      <>
        <div className="NewArrival-Container">{renderHeading()}</div>
      </>
    );
  };

  return render();
};

export default NewArrival;
