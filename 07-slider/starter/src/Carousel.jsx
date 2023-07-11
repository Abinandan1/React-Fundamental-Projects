import { useEffect, useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { shortList, list, longList } from "./data";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Carousel = () => {
  const [people, setPeople] = useState(list);
  const [currentPerson, setCurrentPerson] = useState(0);
  const prevSlide = () => {
    setCurrentPerson((currentIndex) => {
      const nextIndex = (currentIndex - 1 + people.length) % people.length;
      return nextIndex;
    });
  };
  const nextSlide = () => {
    setCurrentPerson((currentIndex) => {
      const nextIndex = (currentIndex + 1) % people.length;
      return nextIndex;
    });
  };
  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSlide();
    }, 5000);
    console.log(currentPerson, sliderId);
    return () => {
      clearInterval(sliderId);
    };
  }, [currentPerson]);
  return (
    <section className="slider-container">
      {people.map((person, index) => {
        const { id, image, title, name, quote } = person;
        return (
          <article
            key={id}
            style={{
              transform: `translateX(${100 * (index - currentPerson)}%)`,
              opacity: index === currentPerson ? 1 : 0,
              visibility: index === currentPerson ? "visible" : "hidden",
            }}
            className="slide"
          >
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button type="button" className="prev" onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button type="button" className="next" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  );
};
export default Carousel;
