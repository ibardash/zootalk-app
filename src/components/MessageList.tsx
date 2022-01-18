import { MessageBubble } from "./MessageBubble";
import styled from "styled-components";
import { useCallback, useEffect, useRef } from "react";
import { Avatar } from "ui";
import { AVATARS } from "config";

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
        <MessageContainer key={i} incoming={Boolean(i % 2)}>
          {!Boolean(i % 2) && (
            <Avatar id="devil" src={AVATARS.devil.src} size="s" />
          )}
          <MessageBubble incoming={Boolean(i % 2)}>{message}</MessageBubble>
          {Boolean(i % 2) && (
            <Avatar id="devil" src={AVATARS.devil.src} size="s" />
          )}
        </MessageContainer>
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

const MessageContainer = styled.div<{ incoming: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: ${({ incoming }) => (incoming ? `flex-end` : `flex-start`)};
  margin-top: 16px;
`;
