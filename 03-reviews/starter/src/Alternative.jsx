import { useEffect, useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
const Alternative = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const checkNumber = (number) => {
    if (number < 0) {
      return people.length - 1;
    }
    if (number > people.length - 1) {
      return 0;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex(checkNumber(index + 1));
  };
  const prevPerson = () => {
    setIndex(checkNumber(index - 1));
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    randomNumber = randomNumber === index ? index + 1 : randomNumber;
    setIndex(checkNumber(randomNumber));
  };
  console.log(index);
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button onClick={randomPerson} className="btn">
          surprise me
        </button>
      </article>
    </main>
  );
};
export default Alternative;
