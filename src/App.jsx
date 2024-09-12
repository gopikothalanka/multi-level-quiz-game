import "./App.css";
import { RootContainer, MainCtr } from "./Styles";
import { questionsData } from "./Questions";
import Quiz from "./Components/Quiz ";
import { StyledHeading } from "./Styles";
function App() {
  return (
    <RootContainer>
      <MainCtr>
        <StyledHeading>Quiz</StyledHeading>
        <Quiz questions={questionsData} />
      </MainCtr>
    </RootContainer>
  );
}

export default App;
