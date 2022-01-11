import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { client } from "./ApiProvider";
import useChatContext from "./ChatContext";
import { useMessagePostedSubscription } from "./components/messagePosted.generated";
import {
  GetMessagesDocument,
  GetMessagesQuery,
  useGetMessagesQuery,
} from "./components/messages.generated";

function Messages() {
  const { loading, error, data } = useGetMessagesQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <div>{data?.messages.join(",")}</div>;
}

function MessagesSubscription() {
  const { loading, error, data } = useMessagePostedSubscription();

  useEffect(() => {
    if (!data?.messagePosted) return;

    const oldData = client.readQuery<GetMessagesQuery>({
      query: GetMessagesDocument,
    });

    client.writeQuery({
      query: GetMessagesDocument,
      data: {
        messages: [...(oldData?.messages ?? []), data?.messagePosted],
      },
    });
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return null;
}

export function WelcomeScreen() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { login } = useChatContext();

  const handleClick = () => {
    login(name);
    navigate("/chat");
  };

  const onChangeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    },
    []
  );

  return (
    <div>
      <input type="text" value={name} onChange={onChangeHandler} />
      <button onClick={handleClick}>Chat now</button>
      <Messages />
      <MessagesSubscription />
    </div>
  );
}
