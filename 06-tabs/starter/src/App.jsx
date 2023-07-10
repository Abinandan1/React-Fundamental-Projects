import { useEffect, useState } from "react";
import Loading from "./Loading";
import Jobinfo from "./Jobinfo";
import BtnContainer from "./BtnContainer";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentJob, setCurrentJob] = useState(0);

  const fetchCurrentJob = (index) => {
    setCurrentJob(index);
  };

  const fetchJobs = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setJobs(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <section className="jobs-center">
      <BtnContainer
        currentJob={currentJob}
        fetchCurrentJob={fetchCurrentJob}
        jobs={jobs}
      />
      <Jobinfo currentJob={currentJob} jobs={jobs} />
    </section>
  );
};
export default App;
