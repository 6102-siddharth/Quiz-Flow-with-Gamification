import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { score, total } = location.state || { score: 0, total: 0 };

  return (
    <div className="result-container">
      <h2 className="result-title">Quiz Results</h2>
      <p className="result-score">Your Score: <span className="bold">{score}</span> out of <span className="bold">{total}</span></p>
      <button 
        onClick={() => navigate("/")} 
        className="restart-button"
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default Result;
