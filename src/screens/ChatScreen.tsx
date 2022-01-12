import { useCallback, useState } from "react";
import styled from "styled-components";
import useChatContext from "ChatContext";
import { MessageInput, MessageList } from "components";

export function ChatScreen() {
  const [messages, setMessages] = useState<string[]>([]);
  const { user } = useChatContext();

  const updateMessages = useCallback(
    (message: string) => {
      setMessages([...messages, message]);
    },
    [messages]
  );

  return (
    <Container>
      {user?.name}
      <MessageList messages={messages} />
      <StyledMessageInput onSubmit={updateMessages} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100%;
  padding: 0 1rem;

  @media (min-width: 80rem) {
    padding: 0 8rem;
  }
`;

const StyledMessageInput = styled(MessageInput)`
  margin-top: 16px;
`;
