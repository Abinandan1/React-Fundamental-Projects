const Category = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button
            onClick={() => filterItems(category)}
            key={category}
            className="btn"
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
export default Category;
