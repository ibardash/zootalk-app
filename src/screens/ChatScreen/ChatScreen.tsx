import { useCallback } from "react";
import styled from "styled-components";
import useUserContext from "UserContext";
import { MessageInput, MessageList } from "components";
import { ChatDocument, ChatQuery, useChatQuery } from "./chat.generated";
import { usePostMessageMutation } from "./postMessage.generated";
import { client } from "ApiProvider";
import { useLocation } from "react-router-dom";

export function ChatScreen() {
  const { state } = useLocation();
  const { user } = useUserContext();
  const { data: chatData } = useChatQuery({
    variables: {
      userId: (state as { userId: string }).userId,
    },
  });
  const chatId = chatData?.user?.chat?.id;
  const messages = chatData?.user?.chat?.messages || [];
  const [postMessage] = usePostMessageMutation();

  const postChatMessage = useCallback(
    async (content: string) => {
      if (!user || !chatId) return;

      const { data } = await postMessage({
        variables: {
          content,
          poster: user?.id,
          chatId,
        },
      });

      const oldData = client.readQuery<ChatQuery>({
        query: ChatDocument,
        variables: { userId: user.id },
      });

      client.writeQuery({
        query: ChatDocument,
        data: {
          ...oldData,
          user: {
            ...oldData?.user,
            id: user.id,
            chat: {
              ...oldData?.user?.chat,
              id: chatId,
              messages: [
                data?.postMessage,
                ...(oldData?.user?.chat?.messages ?? []),
              ],
            },
          },
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
