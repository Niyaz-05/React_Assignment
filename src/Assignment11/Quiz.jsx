import React, { useEffect, useState } from "react";

function Quiz({ questions, setSubmitted, setScore }) {
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(30);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Countdown Timer
  useEffect(() => {
    if (isSubmitted) return;

    if (timeLeft === 0) {
      handleSubmit();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isSubmitted]);

  const handleChange = (qid, option) => {
    if (isSubmitted) return;
    setAnswers({ ...answers, [qid]: option });
  };

  const handleSubmit = () => {
    let calculatedScore = 0;

    questions.forEach((q) => {
      if (answers[q.id] === q.correct) {
        calculatedScore++;
      }
    });

    setScore(calculatedScore);
    setIsSubmitted(true);
    setSubmitted(true);
  };

  return (
    <div>
      <h2>Online Quiz</h2>
      <p className="timer">⏱ Time Left: {timeLeft}s</p>

      {questions.map((q) => (
        <div key={q.id} className="question-card">
          <h4>{q.question}</h4>

          {q.options.map((opt) => (
            <label key={opt} className="option">
              <input
                type="radio"
                name={`q-${q.id}`}
                value={opt}
                disabled={isSubmitted}
                onChange={() => handleChange(q.id, opt)}
              />
              {opt}
            </label>
          ))}
        </div>
      ))}

      <button onClick={handleSubmit} disabled={isSubmitted}>
        Submit Quiz
      </button>
    </div>
  );
}

export default Quiz;
