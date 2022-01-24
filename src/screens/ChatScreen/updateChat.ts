import { ChatDocument, ChatQuery } from "./chat.generated";
import { client } from "graphql/GraphqlProvider";

export const updateChat = (message: any, userId: string, chatId: string) => {
  const oldData = client.readQuery<ChatQuery>({
    query: ChatDocument,
    variables: { userId },
  });

  if (
    oldData?.user?.chat?.messages?.find(
      (cachedMessage) => cachedMessage.id === message.id
    )
  )
    return;

  client.writeQuery({
    query: ChatDocument,
    data: {
      ...oldData,
      user: {
        ...oldData?.user,
        id: userId,
        chat: {
          ...oldData?.user?.chat,
          id: chatId,
          messages: [message, ...(oldData?.user?.chat?.messages ?? [])],
        },
      },
    },
  });
};
