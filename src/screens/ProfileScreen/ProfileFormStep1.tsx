import { ChangeEvent, useCallback, useState } from "react";
import styled from "styled-components";
import { Input, FormStep } from "ui";

export interface ProfileFormStep1Props {
  current: boolean;
  onSubmit: (name: string) => void;
}

export function ProfileFormStep1({ current, onSubmit }: ProfileFormStep1Props) {
  const [name, setName] = useState("");

  const onNameChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }, []);

  const onSubmitHandler = useCallback(() => {
    if (!name.length) return;
    onSubmit(name);
  }, [name, onSubmit]);

  return (
    <FormStep current={current} onSubmit={onSubmitHandler} buttonText="Next">
      <h1>What's your name?</h1>
      <StyledInput type="text" value={name} onChange={onNameChange} />
    </FormStep>
  );
}

const StyledInput = styled(Input)`
  width: 200px;
  text-align: center;
`;
