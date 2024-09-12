import "./App.css";
import { Root_Container, Main_Ctr } from "./Styles";
import { questionsData } from "./Questions";
import Quiz from "./Components/Quiz ";
import { StyledHeading } from "./Styles";
function App() {
  return (
    <Root_Container>
      <Main_Ctr>
        <StyledHeading>Quiz</StyledHeading>
        <Quiz questions={questionsData} />
      </Main_Ctr>
    </Root_Container>
  );
}

export default App;
