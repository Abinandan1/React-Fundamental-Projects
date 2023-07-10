import Duties from "./Duties";

const Jobinfo = ({ jobs, currentJob }) => {
  const { id, order, title, dates, duties, company } = jobs[currentJob];
  console.log(jobs);
  return (
    <article className="job-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <Duties duties={duties} />
    </article>
  );
};
export default Jobinfo;
