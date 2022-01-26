import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import styled from "styled-components";
import { Button, Input } from "ui";

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
    [setMessage]
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
      <StyledInput type="text" value={message} onChange={onChangeHandler} />
      <Button type="submit">Send</Button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
`;

const StyledInput = styled(Input)`
  flex: 1;
  margin-right: 16px;
`;
