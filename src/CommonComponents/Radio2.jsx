import React from "react";
import styled from "styled-components";

const Radio2 = ({ options, name, selectedValue, onChange }) => {
  return (
    <StyledWrapper>
      <div className="radio-input">
        {options.map((option, index) => (
          <label key={option}>
            <input
              value={option}
              name={name}
              id={`${name}-${index}`}
              type="radio"
              checked={selectedValue === option}
              onChange={() => onChange(option)}
            />
            <span>{option.toString()}</span>
          </label>
        ))}
        <span className="selection" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .radio-input input {
    display: none;
  }

  .radio-input {
    --container_width: 300px;
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 10px;
    background-color: #fff;
    color: #000000;
    width: var(--container_width);
    overflow: hidden;
    border: 1px solid rgba(53, 52, 52, 0.226);
  }

  .radio-input label {
    width: 100%;
    padding: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    font-weight: 600;
    letter-spacing: -1px;
    font-size: 14px;
  }

  .selection {
    display: none;
    position: absolute;
    height: 100%;
    width: calc(var(--container_width) / 2);
    z-index: 0;
    left: 0;
    top: 0;
    transition: 0.15s ease;
  }

  .radio-input label:has(input:checked) {
    color: #fff;
  }

  .radio-input label:has(input:checked) ~ .selection {
    background-color: rgb(11 117 223);
    display: inline-block;
  }

  .radio-input label:nth-child(1):has(input:checked) ~ .selection {
    transform: translateX(calc(var(--container_width) * 0 / 2));
  }

  .radio-input label:nth-child(2):has(input:checked) ~ .selection {
    transform: translateX(calc(var(--container_width) * 1 / 2));
  }
`;

export default Radio2;
