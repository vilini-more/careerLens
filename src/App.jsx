import { useState } from "react";
import "./App.css";

import Home from "./pages/Home";
import Analyzer from "./pages/Analyzer";
import Results from "./pages/Results";

function App() {
  const [page, setPage] = useState("home");
  const [analysisData, setAnalysisData] = useState(null);

  const handleStart = () => {
    setPage("analyzer");
  };

  const handleAnalysis = (data) => {
    setAnalysisData(data);
    setPage("results");
  };

  const handleBack = () => {
    setAnalysisData(null);
    setPage("analyzer");
  };

  if (page === "home") {
    return <Home onStart={handleStart} />;
  }

  if (page === "analyzer") {
    return (
      <Analyzer
        onAnalysis={handleAnalysis}
      />
    );
  }

  if (page === "results") {
    return (
      <Results
        data={analysisData}
        onBack={handleBack}
      />
    );
  }

  return null;
}

export default App;