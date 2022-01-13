import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "ui";

export function ProfileScreen() {
  return (
    <Container>
      <Link to="/chat">
        <Button>Start chatting</Button>
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
