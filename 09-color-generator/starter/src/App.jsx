import { useState } from "react";
import ColorList from "./ColorList";
import Form from "./Form";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [colors, setColors] = useState(new Values("#f15025").all(10));
  const addColors = (color) => {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <main>
      <Form addColors={addColors} />
      <ColorList colors={colors} />
    </main>
  );
};
export default App;
