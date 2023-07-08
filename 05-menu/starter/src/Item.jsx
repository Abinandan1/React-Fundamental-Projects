const Item = ({ item }) => {
  return (
    <div id={item.category} key={item.id} className="menu-item">
      <img src={item.img} alt="" className="img" />
      <div className="item-info">
        <header>
          <h5>{item.title}</h5>
          <span className="item-price">${item.price}</span>
        </header>
        <p className="item-text">{item.desc}</p>
      </div>
    </div>
  );
};
export default Item;
