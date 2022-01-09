import React from "react";
import styled from "styled-components";
import { Header, MessageList } from "./components";

function App() {
  return (
    <Container>
      <InnerContainer>
        <Header />
        <MessageList />
      </InnerContainer>
    </Container>
  );
}

const Container = styled.div`
  padding: 2em 0;
  background: linear-gradient(-45deg, #ea4492, #041b2d, #004e9a);
  background-size: 400% 400%;
  animation: gradient-animation 30s ease infinite;

  @keyframes gradient-animation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const InnerContainer = styled.div`
  padding: 0 1rem;

  @media (min-width: 80rem) {
    padding: 0 8rem;
  }
`;

export default App;
