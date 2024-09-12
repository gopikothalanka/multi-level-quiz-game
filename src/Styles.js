import styled from "styled-components";

export const Root_Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e8e8e8;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  font-size: 18px;
`;

export const Main_Ctr = styled.div`
  flex: 1;
  border-radius: 5px;
  border: 1px solid #1e1e1e;
  margin: 3%;
  padding: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const StyledHeading = styled.h1`
  color: #2f75dd;
  font-size: 40px;
  margin: 10px;
  &::first-letter {
    color: #cf372c;
    font-size: 100px;
  }
`;
export const Question_ctr = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 20px;
`;
export const Question_ctr2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

export const Quiz_ctr = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 450px;
  justify-content: space-between;
  max-width: 350px;
`;
export const SubmitBtn_ctr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: end;
`;

export const Quiz_ctr2 = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;
export const Quiz_ctr3 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
`;
export const CHeading = styled.h1`
  color: #292a2d;
  font-size: 30px;
`;

export const ScoreB = styled.p`
  display: flex;
  justify-content: space-between;
`;
export const StyledUl = styled.ul`
  list-style-type: none;
  max-height: 200px;
  overflow-y: auto;
  padding: 0;
  margin: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
