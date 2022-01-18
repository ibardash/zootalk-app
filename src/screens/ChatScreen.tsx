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
      <StyledMessageList messages={messages} />
      <StyledMessageInput onSubmit={updateMessages} />
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 2em;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100%;
  padding: 0 2rem;

  @media (min-width: 80rem) {
    padding: 0 16rem;
  }
`;

const StyledMessageInput = styled(MessageInput)`
  margin-top: 16px;
`;

const StyledMessageList = styled(MessageList)`
  margin-top: 80px;
`;
