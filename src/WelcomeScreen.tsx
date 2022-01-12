import styled from "styled-components";
import { Background, AppLogo } from "./ui";

export function WelcomeScreen() {
  return (
    <>
      <StyledGradientBackground>
        <AppLogo full />
        <AppLogo />
      </StyledGradientBackground>
    </>
  );
}

const StyledGradientBackground = styled(Background)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
