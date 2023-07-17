import { useState } from "react";
import { toast } from "react-toastify";

const Form = ({ items, addItem, updateItem, deleteItem }) => {
  const [newItemName, setNewItemName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItemName) {
      toast.error("please provide a value");
      return;
    }
    addItem(newItemName);
    setNewItemName("");
  };
  const handleChecked = (e, id) => {
    console.log(e.target.checked);
    updateItem(id, e.target.checked);
  };
  const handleDelete = (id) => {
    deleteItem(id);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input
          onChange={(e) => setNewItemName(e.target.value)}
          value={newItemName}
          type="text"
          className="form-input"
        />
        <button type="submit" className="btn">
          submit
        </button>
      </div>
      <div className="items">
        {items.length !== 0 &&
          items.map((item) => {
            return (
              <div key={item.id} className="single-item">
                <input
                  type="checkbox"
                  value={item.name}
                  onChange={(e) => handleChecked(e, item.id)}
                  checked={item.completed}
                />
                <p
                  style={{
                    textTransform: "capitalize",
                    textDecoration: item.completed ? "line-through" : "",
                  }}
                >
                  {item.name}
                </p>
                <button
                  onClick={() => handleDelete(item.id)}
                  className=" btn remove-btn"
                >
                  delete
                </button>
              </div>
            );
          })}
      </div>
    </form>
  );
};
export default Form;
