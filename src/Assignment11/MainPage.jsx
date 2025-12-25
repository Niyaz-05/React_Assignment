import React, { useState } from "react";
import Quiz from "./Quiz";
import Result from "./Result";
import "./quiz.css";

const questions = [
  {
    id: 1,
    question: "What is React?",
    options: ["Library", "Framework", "Language", "Database"],
    correct: "Library",
  },
  {
    id: 2,
    question: "Which hook is used for state?",
    options: ["useEffect", "useState", "useRef", "useMemo"],
    correct: "useState",
  },
  {
    id: 3,
    question: "JSX stands for?",
    options: [
      "JavaScript XML",
      "Java Syntax Extension",
      "JSON XML",
      "JavaScript XHTML",
    ],
    correct: "JavaScript XML",
  },
];

function MainPage() {
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <div className="quiz-container">
      {!submitted ? (
        <Quiz
          questions={questions}
          setSubmitted={setSubmitted}
          setScore={setScore}
        />
      ) : (
        <Result score={score} total={questions.length} />
      )}
    </div>
  );
}

export default MainPage;
