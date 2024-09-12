import { Radio1, Radio2, TextField } from "../CommonComponents";
import { QuestionCtr, QuestionCtr2 } from "../Styles";
const QuizQuestion = ({ questionData, onAnswerChange, value }) => {
  const { type, question, options } = questionData;
  const handleChange = (value) => {
    onAnswerChange(value);
  };

  return (
    <>
      {type === "multiple-choice" && (
        <QuestionCtr2>
          <h3>{question}</h3>
          <Radio1
            options={options}
            name="multiple-choice"
            selectedValue={value}
            onChange={handleChange}
          />
        </QuestionCtr2>
      )}

      {type === "true-false" && (
        <QuestionCtr>
          <h3>{question}</h3>
          <Radio2
            options={["true", "false"]}
            name="true-false"
            selectedValue={value}
            onChange={handleChange}
          />
        </QuestionCtr>
      )}
      {type === "text-input" && (
        <QuestionCtr>
          <h3>{question}</h3>
          <TextField
            placeholder="Type your answer..."
            name="text-input"
            type="text"
            value={value}
            onChange={(e) => handleChange(e.target.value)}
          />
        </QuestionCtr>
      )}
    </>
  );
};
export default QuizQuestion;
