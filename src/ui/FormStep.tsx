import { ReactNode } from "react";
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
  return current ? (
    <Form onSubmit={onSubmit}>
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
