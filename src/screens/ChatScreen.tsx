import { useCallback, useState } from "react";
import styled from "styled-components";
import useUserContext from "UserContext";
import { MessageInput, MessageList } from "components";

export function ChatScreen() {
  const [messages, setMessages] = useState<string[]>([]);
  const { user } = useUserContext();

  const updateMessages = useCallback(
    (message: string) => {
      setMessages([message, ...messages]);
    },
    [messages]
  );

  return (
    <Container>
      {user?.id}
      <br />
      <StyledMessageList messages={messages} />
      <StyledMessageInput onSubmit={updateMessages} />
    </Container>
  );
}

const Container = styled.div`
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
  margin-bottom: 32px;
`;

const StyledMessageList = styled(MessageList)`
  margin-top: 112px;
`;
