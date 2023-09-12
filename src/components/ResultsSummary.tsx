import "./ResultsSummary.css";

const ResultsSummary = () => {
  return (
    <>
      <div className="results-summary-wrapper">
        <div className="result-wrapper bg-gradient">
          <p className="result-title">Your Result</p>
          <div className="circle-wrapper">
            <div className="result-score circle-gradient circle">
              <div className="result-score-number">76</div>
              <div className="of-100">of 100</div>
            </div>
          </div>
          <div className="result-message">
            <p>Great</p>
            <p>
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </div>
        <div className="summary-wrapper">
          <p className="summary-title">Summary</p>
          <div className="summary-list">
            <p className="summary-item light-red light-red-bg">
              <span>Reaction</span>
              <span>80 / 100</span>
            </p>
            <p className="summary-item orangey-yellow orangey-yellow-bg">
              <span>Memory</span>
              <span>92 / 100</span>
            </p>
            <p className="summary-item green-teal green-teal-bg">
              <span>Verbal</span>
              <span>61 / 100</span>
            </p>
            <p className="summary-item cobalt-blue cobalt-blue-bg">
              <span>Visual</span>
              <span>72 / 100</span>
            </p>
          </div>
          <button className="continue">Continue</button>
        </div>
      </div>
    </>
  );
};

export default ResultsSummary;
