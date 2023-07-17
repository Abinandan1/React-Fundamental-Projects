import { useState } from "react";
import Form from "./Form";
import { ToastContainer, toast } from "react-toastify";
import { nanoid } from "nanoid";
const getLocalStorage = () => {
  console.log("GET LOCAL STORAGE");
  return JSON.parse(localStorage.getItem("items") || "[]");
};
const setLocalStorage = (items) => {
  console.log("SET LOCAL STORAGE");
  localStorage.setItem("items", JSON.stringify(items));
};
const defaultList = JSON.parse(localStorage.getItem("items") || "[]");
const App = () => {
  const [items, setItems] = useState(defaultList);
  // ADD ITEM
  const addItem = (itemName) => {
    const itemObject = {
      completed: false,
      id: nanoid(),
      name: itemName,
    };
    let newItems = [...items];
    newItems.push(itemObject);
    setLocalStorage(newItems);
    setItems(newItems);
    toast.success("item added to grocery list");
  };
  // UPDATE ITEM
  const updateItem = (id, checked) => {
    const item = items.find((item) => item.id === id);
    item.completed = checked;
    const newItems = [...items];
    setLocalStorage(newItems);
    setItems(newItems);
  };
  // DELETE ITEM
  const deleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setLocalStorage(newItems);
    setItems(newItems);
    toast.success("item removed from grocery list");
  };
  return (
    <section className="section-center">
      <Form
        items={items}
        addItem={addItem}
        updateItem={updateItem}
        deleteItem={deleteItem}
      />
      <ToastContainer position="top-center" />
    </section>
  );
};

export default App;
