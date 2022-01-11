import { ChangeEvent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import useChatContext from "./ChatContext";
import { useQuery, gql } from "@apollo/client";

const GET_MESSAGES = gql`
  query GetMessages {
    messages
  }
`;

function Messages() {
  const { loading, error, data } = useQuery(GET_MESSAGES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <div>{data.messages}</div>;
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
    </div>
  );
}
