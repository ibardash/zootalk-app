import React from "react";
import styled from "styled-components";

export function Header() {
  return (
    <Container>
      <Title>App</Title>
      <Subtitle>Subheader</Subtitle>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation
      </Description>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;

  @media (min-width: 80rem) {
    font-size: 3rem;
  }
`;

const Subtitle = styled.h2`
  text-align: center;
`;

const Description = styled.p`
  text-align: center;
  max-width: 15rem;

  @media (min-width: 25rem) {
    max-width: 35rem;
  }

  @media (min-width: 60rem) {
    max-width: 40rem;
  }
`;
