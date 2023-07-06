import { useState } from "react";
import Tour from "./Tour";

const Tours = (props) => {
  const tours = props.tours;
  const removeTour = props.removeTour;
  //   console.log(tours);
  //   console.log(removeTour);
  return (
    <section>
      <div className="title">
        <h2 className="title-cover">our tours</h2>
      </div>
      <div className="tours">
        {tours.map((tour) => {
          return <Tour removeTour={removeTour} key={tour.id} tour={tour} />;
        })}
      </div>
    </section>
  );
};
export default Tours;
