import React from "react";
import styled from "styled-components";

const Radio1 = ({ options, name, selectedValue, onChange }) => {
  return (
    <StyledWrapper>
      <div className="custom-radio-input">
        {options.map((option) => (
          <label className="custom-radio-label" key={option}>
            <input
              type="radio"
              name={name}
              value={option}
              checked={selectedValue === option}
              onChange={() => onChange(option)}
            />
            <p className="custom-radio-text">{option}</p>
          </label>
        ))}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .custom-radio-input {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .custom-radio-input * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  .custom-radio-input .custom-radio-label {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 0px 20px;
    width: 220px;
    cursor: pointer;
    height: 50px;
    position: relative;
  }

  .custom-radio-input .custom-radio-label::before {
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 220px;
    height: 45px;
    z-index: -1;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    border-radius: 10px;
    border: 2px solid transparent;
  }

  .custom-radio-input .custom-radio-label:hover::before {
    transition: all 0.2s ease;
    background-color: #2a2e3c;
  }

  .custom-radio-input .custom-radio-label:has(input:checked)::before {
    background-color: #2d3750;
    border-color: #435dd8;
    height: 50px;
  }

  .custom-radio-input .custom-radio-text {
    color: #2a2e3c;
    transition: color 0.2s ease;
  }

  .custom-radio-input .custom-radio-label:hover .custom-radio-text {
    color: #435dd8;
  }
  .custom-radio-input
    .custom-radio-label:has(input:checked)
    .custom-radio-text {
    color: #435dd8;
  }

  .custom-radio-input .custom-radio-label input[type="radio"] {
    background-color: #202030;
    appearance: none;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .custom-radio-input .custom-radio-label input[type="radio"]:checked {
    background-color: #435dd8;
    -webkit-animation: pulse 0.7s forwards;
    animation: pulse 0.7s forwards;
  }

  .custom-radio-input .custom-radio-label input[type="radio"]::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    transition: all 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);
    background-color: #fff;
    transform: scale(0);
  }

  .custom-radio-input .custom-radio-label input[type="radio"]:checked::before {
    transform: scale(1);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
    }
    70% {
      box-shadow: 0 0 0 8px rgba(255, 255, 255, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    }
  }
`;

export default Radio1;
