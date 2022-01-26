import { AVATARS } from "config";
import { useCallback, useState } from "react";
import styled from "styled-components";
import { Avatar, FormStep } from "ui";

export interface ProfileFormStep3Props {
  current: boolean;
  onSubmit: (zoo: string) => void;
}

export function ProfileFormStep3({ current, onSubmit }: ProfileFormStep3Props) {
  const [avatar, setAvatar] = useState<string | undefined>();
  const onAvatarSelect = useCallback(
    (avatar: string) => {
      setAvatar(avatar);
    },
    [setAvatar]
  );

  const onSubmitHandler = useCallback(() => {
    if (avatar) onSubmit(avatar);
  }, [avatar, onSubmit]);

  return (
    <FormStep
      current={current}
      onSubmit={onSubmitHandler}
      buttonText="Start chatting"
    >
      <h1>What's your favourite animal?</h1>
      <Images>
        {Object.values(AVATARS).map(({ id, description, src }) => (
          <StyledAvatar
            key={id}
            id={id}
            description={description}
            src={src}
            selected={avatar === id}
            onClick={onAvatarSelect}
          />
        ))}
      </Images>
    </FormStep>
  );
}

const Images = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 16px;
`;

const StyledAvatar = styled(Avatar)`
  flex: 1;
`;
