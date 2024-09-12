import { Radio1, Radio2, TextField } from "../CommonComponents";
import { Question_ctr, Question_ctr2 } from "../Styles";
const QuizQuestion = ({ questionData, onAnswerChange, value }) => {
  const { type, question, options } = questionData;
  const handleChange = (value) => {
    onAnswerChange(value);
  };

  return (
    <>
      {type === "multiple-choice" && (
        <Question_ctr2>
          <h3>{question}</h3>
          <Radio1
            options={options}
            name="multiple-choice"
            selectedValue={value}
            onChange={handleChange}
          />
        </Question_ctr2>
      )}

      {type === "true-false" && (
        <Question_ctr>
          <h3>{question}</h3>
          <Radio2
            options={["true", "false"]}
            name="true-false"
            selectedValue={value}
            onChange={handleChange}
          />
        </Question_ctr>
      )}
      {type === "text-input" && (
        <Question_ctr>
          <h3>{question}</h3>
          <TextField
            placeholder="Type your answer..."
            name="text-input"
            type="text"
            value={value}
            onChange={(e) => handleChange(e.target.value)}
          />
        </Question_ctr>
      )}
    </>
  );
};
export default QuizQuestion;
