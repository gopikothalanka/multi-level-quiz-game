import React from "react";
import styled from "styled-components";

const Button2 = ({ label, href, onClick, disabled }) => {
  return (
    <StyledWrapper>
      <button onClick={onClick} disabled={disabled}>
        <a href={disabled ? "#" : href} className={disabled ? "disabled" : ""}>
          <span>{label}</span>
        </a>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  a {
    position: relative;
    display: inline-block;
    padding: 15px 30px;
    border: 2px solid #1e1e1e;
    text-transform: uppercase;
    color: #1e1e1e;
    text-decoration: none;
    font-weight: 600;
    font-size: 20px;
  }

  a::before {
    content: "";
    position: absolute;
    top: 6px;
    left: -2px;
    width: calc(100% + 4px);
    height: calc(100% - 12px);
    background-color: #e8e8e8;
    transition: 0.3s ease-in-out;
    transform: scaleY(1);
  }

  a:hover::before {
    transform: scaleY(0);
  }

  a::after {
    content: "";
    position: absolute;
    left: 6px;
    top: -2px;
    height: calc(100% + 4px);
    width: calc(100% - 12px);
    background-color: #e8e8e8;
    transition: 0.3s ease-in-out;
    transform: scaleX(1);
    transition-delay: 0.5s;
  }

  a:hover::after {
    transform: scaleX(0);
  }

  a span {
    position: relative;
    z-index: 3;
  }

  button {
    background-color: none;
    text-decoration: none;
    background-color: #e8e8e8;
    border: none;
    cursor: pointer;
  }

  button[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  .disabled {
    pointer-events: none;
    color: #aaa;
    border-color: #aaa;
  }
`;

export default Button2;
