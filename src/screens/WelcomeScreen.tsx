import { Link } from "react-router-dom";
import styled from "styled-components";
import { AppLogo, Button } from "ui";

export function WelcomeScreen() {
  return (
    <Container>
      <AppLogo full />
      <Link to="/profile">
        <StyledButton>Set up profile</StyledButton>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledButton = styled(Button)`
  margin-top: 16px;
`;
