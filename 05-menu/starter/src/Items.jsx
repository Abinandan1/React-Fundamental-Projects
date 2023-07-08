import Item from "./Item";

const Items = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
