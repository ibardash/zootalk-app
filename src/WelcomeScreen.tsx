import { ChangeEvent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import useChatContext from "./ChatContext";

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
    </div>
  );
}
