import styled from "styled-components";
import { BlobText, Background } from "./ui";

export function WelcomeScreen() {
  return (
    <StyledGradientBackground>
      <StyledSquigglyText>ZooTalk</StyledSquigglyText>
    </StyledGradientBackground>
  );
}

const StyledGradientBackground = styled(Background)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const StyledSquigglyText = styled(BlobText)`
  color: #fff;
`;
