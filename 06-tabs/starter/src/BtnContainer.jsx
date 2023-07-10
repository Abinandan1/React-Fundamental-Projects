const BtnContainer = ({ jobs, fetchCurrentJob, currentJob }) => {
  return (
    <div className="btn-container">
      {jobs.map((job, index) => {
        return (
          <button
            onClick={() => fetchCurrentJob(index)}
            key={job.id}
            className={`job-btn ${currentJob === index ? "active-btn" : ""}`}
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
};
export default BtnContainer;
