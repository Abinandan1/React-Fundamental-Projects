import { useState } from "react";
import data from "./data";
import { useEffect } from "react";
import Title from "./Title";
import Category from "./Category";
import Items from "./Items";

const allCategories = ["all", ...new Set(data.map((item) => item.category))];

const App = () => {
  const [items, setItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setItems(data);
      return;
    }
    const filteredItems = data.filter((item) => {
      return item.category === category;
    });
    setItems(filteredItems);
  };

  return (
    <main>
      <div className="menu">
        <Title text="our menu" />
        <Category filterItems={filterItems} categories={categories} />
        <Items items={items} />
      </div>
    </main>
  );
};
export default App;
