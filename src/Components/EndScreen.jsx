import React from "react";
import { CHeading, QuizCtr3, StyledUl } from "../Styles";
import { Button1 } from "../CommonComponents";

const EndScreen = ({ reStart, score }) => {
  const storedScores = JSON.parse(localStorage.getItem("scores")) || [];
  const sortedScores = storedScores.sort((a, b) => b.score - a.score);

  return (
    <QuizCtr3>
      <CHeading>Completed...</CHeading>
      <p>
        <strong> Your Total Score:</strong> {score}
      </p>

      <strong>Leaderboard:</strong>
      <StyledUl>
        {sortedScores.map((entry, index) => (
          <li key={index}>
            <span style={{ textTransform: "capitalize" }}>{entry.user}</span>:
            {entry.score}
          </li>
        ))}
      </StyledUl>

      <Button1 onClick={reStart} label={"Restart..."} />
    </QuizCtr3>
  );
};

export default EndScreen;
