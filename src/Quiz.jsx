import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import data from "./data.json";

const Quiz = () => {
  const navigate = useNavigate();

  const [questions, setQuestions] = useState(data.questions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleNext = () => {
    if (selectedAnswer && selectedAnswer.is_correct) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      navigate("/results", { state: { score, total: questions.length } });
    }
  };

  console.log(questions);

  return (
    <div className="quiz-container">
      <h2 className="score">Score: {score}</h2>
      {questions.length > 0 && (
        <div>
          <h2 className="question">{questions[currentQuestion].description}</h2>
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelectedAnswer(option)}
              className={`option-button ${selectedAnswer === option ? "selected" : ""}`}
            >
              {option.description}
            </button>
          ))}
          <button onClick={handleNext} className="next-button">
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
