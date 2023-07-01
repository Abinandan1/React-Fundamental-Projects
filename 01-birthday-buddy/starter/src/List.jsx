import Person from "./Person";

const List = ({ list }) => {
  return (
    <div className="people">
      {list.map((person) => {
        return <Person {...person} key={person.id} />;
      })}
    </div>
  );
};
export default List;
