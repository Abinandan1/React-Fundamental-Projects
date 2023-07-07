import { useState } from "react";
import data from "./data";
import { FaPlus, FaMinus } from "react-icons/fa";
import Questions from "./Questions";

const App = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <div className="container">
      <h1>questions</h1>
      <Questions questions={questions} />
    </div>
  );
};
export default App;
