import React from "react";
import styled from "styled-components";

const TextField = ({ placeholder, name, type, onChange, value }) => {
  return (
    <StyledWrapper>
      <input
        className="input"
        placeholder={placeholder}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
      />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .input {
    font-family: "SF Pro";
    max-width: 190px;
    padding: 0.875rem;
    font-size: 1rem;
    border: 1.5px solid #000;
    border-radius: 0.5rem;
    box-shadow: 2.5px 3px 0 #000;
    outline: none;
    transition: ease 0.25s;
  }

  .input:focus {
    box-shadow: 5.5px 7px 0 black;
  }
`;

export default TextField;
