import "./ResultsSummary.css";

const ResultsSummary = () => {
  return (
    <>
      <div className="results-summary-wrapper">
        <div className="result-wrapper">
          <p className="result-title">Your Result</p>
          <div className="result-score">76 of 100</div>
          <div className="result-message">
            <h1>Great</h1>
            <p>
              You scored hither than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </div>
        <div className="summary-wrapper">
          <p className="summary-title">Summary</p>
          <ul className="summary-list">
            <li className="summary-item">Reaction 80 / 100</li>
            <li className="summary-item">Memory 92 / 100</li>
            <li className="summary-item">Verbal 61 / 100</li>
            <li className="summary-item">Visual 72 / 100</li>
          </ul>
          <button className="continue">Continue</button>
        </div>
      </div>
    </>
  );
};

export default ResultsSummary;
