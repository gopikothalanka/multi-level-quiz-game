import React, { useState, useEffect } from "react";
import QuizQuestion from "./QuizQuestion";
import { Button2, Button3, TextField } from "../CommonComponents";
import { SubmitBtnCtr, QuizCtr, QuizCtr2, ScoreB } from "../Styles";
import EndScreen from "./EndScreen";
const Quiz = ({ questions }) => {
  const [screen, setScreen] = useState("start");
  const [currentLevel, setCurrentLevel] = useState("easy");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [user, setUser] = useState(null);
  const [score, setScore] = useState(0);
  const [storedScores, setStoredScores] = useState(
    JSON.parse(localStorage.getItem("scores")) || []
  );
  const oldScore = storedScores.find((x) => x.user === user);

  const LEVELS = {
    easy: 10,
    medium: 20,
    hard: 30,
  };
  const currentQuestions = questions[currentLevel];
  const currentQuestion = currentQuestions[currentQuestionIndex];

  const handleAnswerChange = (value) => {
    setAnswer(value);
  };
  const updateSrore = () => {
    if (user) {
      const storedScores = JSON.parse(localStorage.getItem("scores")) || [];
      const u = user.toLowerCase();
      const updatedScores = storedScores.filter((x) => x.user !== u);
      updatedScores.push({ user: u, score });
      localStorage.setItem("scores", JSON.stringify(updatedScores));
    }
  };
  const handleSubmit = () => {
    updateSrore();
    const isCorrect =
      answer?.toString().toLowerCase() ===
      currentQuestion.correctAnswer.toLowerCase();
    if (isCorrect) {
      setScore(score + LEVELS[currentLevel]);
    }
    setAnswer("");

    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      if (currentLevel === "easy") {
        setCurrentLevel("medium");
        setCurrentQuestionIndex(0);
      } else if (currentLevel === "medium") {
        setCurrentLevel("hard");
        setCurrentQuestionIndex(0);
      } else {
        if (score === 0) {
          updateSrore();
        }
        setScreen("end");
      }
    }
  };
  const reStart = () => {
    setScreen("start");
    setCurrentLevel("easy");
    setCurrentQuestionIndex(0);
    setScore(0);
    setStoredScores(JSON.parse(localStorage.getItem("scores")) || []);
    setUser(null);
  };

  useEffect(() => {
    updateSrore();
  }, [score, updateSrore]);

  return (
    <>
      {screen === "quiz" && (
        <QuizCtr>
          <div>
            <ScoreB>
              <span>
                <strong>Level: </strong>
                {currentLevel}
              </span>
              {oldScore && (
                <span>
                  <strong>{user}'s Old Score: </strong>
                  {oldScore?.score}
                  {console.log("old", oldScore)}
                </span>
              )}
            </ScoreB>

            {currentQuestion && (
              <QuizQuestion
                questionData={currentQuestion}
                onAnswerChange={handleAnswerChange}
                value={answer}
              />
            )}
          </div>
          <SubmitBtnCtr>
            <Button3 label="Submit" onClick={handleSubmit} />
            <div>Current Score: {score}</div>
          </SubmitBtnCtr>
        </QuizCtr>
      )}
      {screen === "start" && (
        <QuizCtr2>
          <TextField
            placeholder="Enter your Name here"
            name="text-input"
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <Button2
            label={"Start Quiz..."}
            onClick={() => user?.length >= 3 && setScreen("quiz")}
            disabled={!user || user?.length < 3}
          />
        </QuizCtr2>
      )}
      {screen === "end" && <EndScreen reStart={reStart} score={score} />}
    </>
  );
};

export default Quiz;
