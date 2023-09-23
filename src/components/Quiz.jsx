import React, { useState } from "react";
import { QuizData } from "../Data/QuizData";
import Result from "./Result";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  //check if Options is selected
  const OptionSelectCheck = () => {
    if (clickedOption === 0) {
      alert("Please Select An Option ");
    } else {
      changeQuestion();
    }
  };
  // Changing Question
  const changeQuestion = () => {
    updateScore();
    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption(0);
    } else {
      setShowResult(true);
    }
  };

  const updateScore = () => {
    if (QuizData[currentQuestion].answer === clickedOption) {
      setScore(score + 1);
    }
  };
  // function to reset ALL
  const resetAll = () => {
    setShowResult(false);
    setScore(0);
    setClickedOption(0);
    setCurrentQuestion(0);
  };
  return (
    <div>
      <p className="heading-txt">Quiz App</p>
      <div className="container">
        {showResult ? (
          <Result
            score={score}
            totalScore={QuizData.length}
            resetAll={resetAll}
          />
        ) : (
          <>
            <div className="question">
              <span className="question-number">{currentQuestion + 1}. </span>
              <span className="question-txt">
                {QuizData[currentQuestion].question}
              </span>
            </div>
            <div className="option-container">
              {QuizData[currentQuestion].options.map((value, i) => {
                return (
                  <button
                    key={i}
                    className={`option-btn ${
                      clickedOption === i + 1 ? "checked" : null
                    }`}
                    onClick={() => {
                      setClickedOption(i + 1);
                    }}
                  >
                    {value}
                  </button>
                );
              })}
            </div>
            <input
              type="button"
              value="Next"
              id="next-button"
              onClick={OptionSelectCheck}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;
