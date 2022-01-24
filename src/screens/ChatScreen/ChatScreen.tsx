import { useCallback, useEffect } from "react";
import styled from "styled-components";
import useUserContext from "UserContext";
import { MessageInput, MessageList } from "components";
import { useChatQuery } from "./chat.generated";
import { usePostMessageMutation } from "./postMessage.generated";
import { useLocation } from "react-router-dom";
import { updateChat } from "./updateChat";
import { useMessagePostedSubscription } from "./messagePosted.generated";

export function ChatScreen() {
  const { state } = useLocation();
  const { user } = useUserContext();
  const { data: messageSubscriptionData } = useMessagePostedSubscription();
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
          posterId: user?.id,
          chatId,
        },
      });

      updateChat(data?.postMessage, user.id, chatId);
    },
    [chatId, postMessage, user]
  );

  useEffect(() => {
    if (!user || !chatId || !messageSubscriptionData?.messagePosted) return;
    updateChat(messageSubscriptionData.messagePosted, user.id, chatId);
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
