import "./ResultsSummary.css";

const ResultsSummary = () => {
  return (
    <>
      <div className="results-summary-wrapper">
        <div className="result-wrapper bg-gradient">
          <p className="result-title">Your Result</p>
          <div className="circle-wrapper">
            <div className="result-score circle-gradient circle">76 of 100</div>
          </div>
          <div className="result-message">
            <h1>Great</h1>
            <p>
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </div>
        <div className="summary-wrapper">
          <p className="summary-title">Summary</p>
          <div className="summary-list">
            <p className="summary-item">Reaction 80 / 100</p>
            <p className="summary-item">Memory 92 / 100</p>
            <p className="summary-item">Verbal 61 / 100</p>
            <p className="summary-item">Visual 72 / 100</p>
          </div>
          <button className="continue">Continue</button>
        </div>
      </div>
    </>
  );
};

export default ResultsSummary;
