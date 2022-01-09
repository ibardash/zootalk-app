import { MessageBubble } from "../MessageBubble";
import styled from "styled-components";

export interface MessageListProps {
  messages: string[];
}

export function MessageList({ messages }: MessageListProps) {
  return (
    <OuterContainer>
      {messages.map((message, i) => (
        <MessageBubble key={i}>{message}</MessageBubble>
      ))}
    </OuterContainer>
  );
}

const OuterContainer = styled.div`
  overflow-y: scroll;
`;
