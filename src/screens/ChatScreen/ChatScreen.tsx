import { useCallback, useEffect } from "react";
import styled from "styled-components";
import useUserContext from "UserContext";
import { MessageInput, MessageList } from "components";
import { useChatLazyQuery } from "./chat.generated";
import { usePostMessageMutation } from "./postMessage.generated";

export function ChatScreen() {
  const { user } = useUserContext();
  const [getChat, { data: chatData }] = useChatLazyQuery();
  const chatId = chatData?.user?.chat?.id;
  const messages = chatData?.user?.chat?.messages || [];

  const [postMessage] = usePostMessageMutation();

  useEffect(() => {
    if (!user || !!chatData) return;

    getChat({
      variables: { userId: user?.id },
    });
  });

  const postChatMessage = useCallback(
    (message: string) => {
      console.log(user);
      console.log(chatId);
      if (!user || !chatId) return;

      postMessage({
        variables: {
          content: message,
          poster: user?.id,
          chatId,
        },
      });
    },
    [chatId, postMessage, user]
  );

  return (
    <Container>
      {user?.id}
      <br />
      <StyledMessageList messages={messages} />
      <StyledMessageInput onSubmit={postChatMessage} />
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
