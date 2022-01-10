import { useCallback, useState } from "react";
import styled from "styled-components";
import useChatContext from "./ChatContext";
import { Header, MessageInput, MessageList } from "./components";

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
      <InnerContainer>
        <Header />
        {user?.name}
        <MessageList messages={messages} />
        <StyledMessageInput onSubmit={updateMessages} />
      </InnerContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em 0;
  background: linear-gradient(-45deg, #ea4492, #041b2d, #004e9a);
  background-size: 400% 400%;
  animation: gradient-animation 30s ease infinite;

  @keyframes gradient-animation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const InnerContainer = styled.div`
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
