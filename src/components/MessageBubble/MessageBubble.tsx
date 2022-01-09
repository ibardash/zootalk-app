import styled from "styled-components";
import "animate.css";

export interface MessageBubbleProps {
  children: string;
}

export function MessageBubble({ children: message }: MessageBubbleProps) {
  return (
    <OuterContainer className="animate__animated animate__bounceInUp">
      {message}
    </OuterContainer>
  );
}

const OuterContainer = styled.div`
  border-radius: 8px;
  background-color: #fff;
  padding: 12px;
  margin-top: 16px;
  width: fit-content;
  max-width: 400px;
  color: #404040;
`;
