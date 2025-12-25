import React from "react";

function Result({ score, total }) {
  return (
    <div className="result">
      <h2>Quiz Result</h2>
      <p>Total Questions: {total}</p>
      <p>Correct Answers: {score}</p>
      <p>Wrong Answers: {total - score}</p>
      <h3>Final Score: {score}/{total}</h3>
    </div>
  );
}

export default Result;
