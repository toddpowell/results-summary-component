import "./ResultsSummary.css";
import { ResultsData } from "../../ResultsData";

const ResultsSummary = () => {
  return (
    <>
      <div className="left-panel">
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
        <div className="right-panel">
          <div className="summary-wrapper">
            <p className="summary-title">Summary</p>
            <div className="summary-list">
              {ResultsData.map((result, i) => (
                <>
                  <p className={"summary-item color-" + i + " bg-" + i}>
                    <div>
                      <img src={result.icon}></img>
                      <span>{result.category}</span>
                    </div>
                    <span>{result.score} / 100</span>
                  </p>
                </>
              ))}
              <button className="continue xbg-gradient">Continue</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultsSummary;
