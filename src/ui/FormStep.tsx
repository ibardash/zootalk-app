import { FormEvent, ReactNode, useCallback } from "react";
import styled from "styled-components";
import { Button } from "ui";

export interface FormStepProps {
  current: boolean;
  children: ReactNode;
  onSubmit: () => void;
  buttonText: string;
}

export function FormStep({
  children,
  onSubmit,
  current,
  buttonText,
}: FormStepProps) {
  const onSubmitHandler = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSubmit();
    },
    [onSubmit]
  );

  return current ? (
    <Form onSubmit={onSubmitHandler}>
      {children}
      <StyledButton type="submit">{buttonText}</StyledButton>
    </Form>
  ) : null;
}

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledButton = styled(Button)`
  margin-top: 32px;
  min-width: 100px;
`;
