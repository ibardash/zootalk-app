import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    -45deg,
    #07404f,
    #0a5861,
    #207879,
    #4c9d82,
    #6abf89,
    #97df95,
    #d2f1a1
  );
  background-size: 400% 400%;
  animation: gradient-animation 10s ease infinite;

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
