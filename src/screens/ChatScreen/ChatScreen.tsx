import { useCallback, useEffect } from "react";
import styled from "styled-components";
import useUserContext from "UserContext";
import { MessageInput } from "./MessageInput";
import { MessageList } from "./MessageList";
import {
  useChatQuery,
  usePostMessageMutation,
  useMessagePostedSubscription,
  updateChat,
} from "./graphql";

export function ChatScreen() {
  const { user } = useUserContext();
  if (!user) throw new Error("No current user");

  const { data: chatData } = useChatQuery({
    variables: {
      userId: user.id,
    },
  });
  const chatId = chatData?.user?.chat?.id;
  const messages = chatData?.user?.chat?.messages || [];

  const [postMessage] = usePostMessageMutation();
  const { data: messageSubscriptionData } = useMessagePostedSubscription();

  const postChatMessage = useCallback(
    async (content: string) => {
      if (!user || !chatId) return;

      const { data } = await postMessage({
        variables: {
          content,
          senderId: user?.id,
          chatId,
        },
      });

      updateChat(data?.postMessage, user.id, chatId);
    },
    [chatId, postMessage, user]
  );

  useEffect(() => {
    const newMessage = messageSubscriptionData?.messagePosted;
    if (!user || !chatId || !newMessage) return;

    updateChat(newMessage, user.id, chatId);
  }, [chatId, messageSubscriptionData, user]);

  return (
    <Container>
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
