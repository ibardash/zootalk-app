import { MessageBubble } from "../MessageBubble";
import styled from "styled-components";

export interface MessageListProps {
  messages: string[];
}

export function MessageList({ messages }: MessageListProps) {
  return (
    <OuterContainer>
      <InnerContainer className="scrollable-content content">
        {messages.map((message, i) => (
          <MessageBubble key={i}>{message}</MessageBubble>
        ))}
      </InnerContainer>
    </OuterContainer>
  );
}

const OuterContainer = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 auto;
`;
