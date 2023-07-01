import { useState } from "react";
import people from "./data";
import "./index.css";
import List from "./List";

const App = () => {
  const [list, setList] = useState(people);
  const clearAll = () => {
    setList([]);
  };
  return (
    <main>
      <div className="container">
        <h1 className="birthdays-heading">{list.length} birthdays today</h1>
        <List list={list} />
        <button className="btn btn-block" onClick={clearAll}>
          clear all
        </button>
      </div>
    </main>
  );
};
export default App;
