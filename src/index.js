import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";

var border = keyframes`   
  0% {
    border-radius: 48%;
    margin:12px;
  }

  25% {
    border-radius: 42%;
    margin:24px;
  }

  50% {
    border-radius: 36%;
    margin:36px;
  }

  75% {
    border-radius: 24%;
    margin:48px;
  }

  100% {
    border-radius: 12%;
    margin:60px;
  }
}
`;

const StyledApp = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

const StyledContainer = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
`;
const StyledCircle = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
  border: solid 1rem black;
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
  background-color: red;
  animation: ${border} 2s linear infinite;
  animation-direction: alternate;
`;

const StyledEye = styled.div`
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  background-color: yellow;
  margin: 10px;
  border: 1px solid black;
`;

const StyledBiggie = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
  border: solid 1rem red;
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
  background-color: black;
  animation: ${border} 1s linear infinite;
  animation-direction: alternate;
`;

const StyledSquareEye = styled.div`
  border-radius: 0%;
  width: 2rem;
  height: 2rem;
  background-color: pink;
  margin: 10px;
  border: 1px solid black;
`;

const App = () => {
  return (
    <StyledApp>
      <StyledContainer>
        <StyledCircle>
          <StyledEye />
          <StyledSquareEye />
        </StyledCircle>
        <StyledBiggie>
          <StyledSquareEye />
          <StyledEye />
        </StyledBiggie>
      </StyledContainer>
    </StyledApp>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
