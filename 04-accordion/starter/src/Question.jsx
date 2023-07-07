import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const Question = ({ question }) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <article className="question">
      <header>
        <h5>{question.title}</h5>
        <button
          onClick={() => setIsPressed(!isPressed)}
          className="question-btn"
        >
          {isPressed ? <FaMinus /> : <FaPlus />}
        </button>
      </header>
      {isPressed && <p>{question.info}</p>}
    </article>
  );
};
export default Question;
