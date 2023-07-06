import { useEffect, useState } from "react";
import Tours from "./Tours";
import Loading from "./Loading";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const filteredTours = tours.filter((tour) => tour.id !== id);
    setTours(filteredTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchTours();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button
            style={{ marginTop: "2rem" }}
            onClick={fetchTours}
            className="btn"
          >
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours removeTour={removeTour} tours={tours} />
    </main>
  );
};
export default App;
