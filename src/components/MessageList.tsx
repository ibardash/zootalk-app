import styled from "styled-components";
import { useCallback, useEffect, useRef } from "react";
import useUserContext from "UserContext";
import { Message } from "./Message";

export interface MessageListProps {
  messages: {
    content?: string | null | undefined;
    poster?:
      | {
          id: string;
          avatar?: string | null | undefined;
          name?: string | null | undefined;
        }
      | null
      | undefined;
  }[];
  className?: string;
}

const SCROLL_DELAY_MS = 300;

export function MessageList({ messages, className }: MessageListProps) {
  const { user } = useUserContext();
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
      {messages.map(({ content, poster }, i) => (
        <Message
          key={i}
          content={content}
          incoming={poster?.id === user?.id}
          posterAvatar={poster?.avatar}
          posterName={poster?.name}
        />
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
