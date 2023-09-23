import React from "react";

function Result({ score, totalScore, resetAll }) {
  return (
    <>
      <div className="show-score">
        <h1>Score:{score}</h1>
        <h1> Total: {totalScore}</h1>
      </div>
      <button id="next-button" onClick={resetAll}>
        Try Again
      </button>
    </>
  );
}

export default Result;
