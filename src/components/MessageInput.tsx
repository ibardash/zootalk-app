import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import styled from "styled-components";
import "animate.css";

export interface MessageInputProps {
  onSubmit: (message: string) => void;
  className?: string;
}

export function MessageInput({ onSubmit, className }: MessageInputProps) {
  const [message, setMessage] = useState("");

  const onChangeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setMessage(event.target.value);
    },
    []
  );

  const onSubmitHandler = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (!message) return;

      onSubmit(message);
      setMessage("");
    },
    [message, onSubmit]
  );

  return (
    <Form onSubmit={onSubmitHandler} className={className}>
      <Wrapper>
        <Input type="text" value={message} onChange={onChangeHandler} />
      </Wrapper>
      <button type="submit">Send</button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
`;

const Wrapper = styled.div`
  background-color: green;
  display: flex;
  border-radius: 8px;
  padding: 8px;
  margin-right: 16px;
  flex: 1;
`;

const Input = styled.input`
  border-width: 0px;
  border-radius: 8px;
  background-color: #fff;
  font-size: 20px;
  padding: 12px;
  flex: 1;
`;
