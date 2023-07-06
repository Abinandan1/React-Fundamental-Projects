import { useState } from "react";

const Tour = (props) => {
  const [readMore, setReadMore] = useState(false);

  const { id, image, info, name, price } = props.tour;
  console.log(info.length, info.substring(0, 200));
  const removeTour = props.removeTour;
  return (
    <article className="single-tour">
      <img src={image} alt="" className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore ? info : info.substring(0, info.length / 3)}...
          <button
            type="button"
            onClick={() => setReadMore(!readMore)}
            className="info-btn"
          >
            {readMore ? `show less` : `read more`}
          </button>
        </p>
        <button
          onClick={() => removeTour(id)}
          className="delete-btn btn btn-block"
        >
          not interested
        </button>
      </div>
    </article>
  );
};
export default Tour;
