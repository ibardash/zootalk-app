import styled from "styled-components";
import { ProfileForm } from "./ProfileForm";

export function ProfileScreen() {
  return (
    <Container>
      <ProfileForm />
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
