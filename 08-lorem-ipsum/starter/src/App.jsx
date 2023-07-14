import { useState } from "react";
import data from "./data";
import { nanoid } from "nanoid";
const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);
  const handleChange = (e) => {
    const value = e.target.value;
    setCount(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // const newText = data.filter((item, index) => {
    //   return index < count;
    // });
    setText(data.slice(0, count));
  };
  return (
    <div className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <form onSubmit={handleSubmit} action="" className="lorem-form">
        <label htmlFor="count">paragraphs:</label>
        <input
          min={1}
          max={8}
          step={1}
          onChange={handleChange}
          value={count}
          type="number"
        />
        <button className="btn">generate</button>
      </form>
      <div className="lorem-text">
        {text.map((para) => {
          return <p key={nanoid()}>{para}</p>;
        })}
      </div>
    </div>
  );
};
export default App;
