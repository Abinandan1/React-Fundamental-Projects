const Person = ({ image, name, age }) => {
  return (
    <article className="person">
      <img className="img" src={image} alt="" />
      <div>
        <h2>{name}</h2>
        <p>{age} years</p>
      </div>
    </article>
  );
};
export default Person;
