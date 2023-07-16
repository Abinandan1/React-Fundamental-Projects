import { useState } from "react";
import Values from "values.js";

const Form = ({ addColors }) => {
  const [color, setColor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addColors(color);
  };
  return (
    <section className="container">
      <h4>color generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          onChange={(e) => setColor(e.target.value)}
          value={color}
        />
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#f15025"
        />
        <button style={{ background: color }} className="btn" type="submit">
          submit
        </button>
      </form>
    </section>
  );
};
export default Form;
