import { MessageBubble } from "./MessageBubble";
import styled from "styled-components";
import { useCallback, useEffect, useRef } from "react";

export interface MessageListProps {
  messages: string[];
  className?: string;
}

const SCROLL_DELAY_MS = 300;

export function MessageList({ messages, className }: MessageListProps) {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    setTimeout(() => scrollToBottom(), SCROLL_DELAY_MS);
  }, [messages, scrollToBottom]);

  return (
    <OuterContainer className={className}>
      <div ref={messagesEndRef} />
      {messages.map((message, i) => (
        <MessageBubble incoming={Boolean(i % 2)} key={i}>
          {message}
        </MessageBubble>
      ))}
    </OuterContainer>
  );
}

const OuterContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column-reverse;
  overflow-y: scroll;
`;
