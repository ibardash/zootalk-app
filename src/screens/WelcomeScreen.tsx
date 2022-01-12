import styled from "styled-components";
import { AppLogo } from "ui";

export function WelcomeScreen() {
  return (
    <Container>
      <AppLogo full />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
