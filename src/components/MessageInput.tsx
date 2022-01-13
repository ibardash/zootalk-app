import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import styled from "styled-components";
import { Button } from "ui";

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
      <Input type="text" value={message} onChange={onChangeHandler} />
      <Button type="submit">Send</Button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
`;

const Input = styled.input`
  border-width: 0px;
  border-radius: 16px;
  background-color: #fff;
  font-size: 16px;
  padding: 12px;
  flex: 1;
  margin-right: 16px;

  &:focus {
    background-color: rgba(255, 255, 255, 0.85);
  }
`;
