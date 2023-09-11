import "./App.css";
import ResultsSummary from "./components/ResultsSummary";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@500;700;800&family=Poppins:wght@400;500;600;700&display=swap');
</style>;

function App() {
  return (
    <>
      <div className="app-container">
        <div>
          <ResultsSummary />
        </div>
      </div>
    </>
  );
}

export default App;
