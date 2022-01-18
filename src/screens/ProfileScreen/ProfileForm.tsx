import { ZOOS, AVATARS } from "config";
import { ChangeEvent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Avatar, Input, Zoo, FormStep } from "ui";

export function ProfileForm() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [profile, setProfile] = useState({
    name: "",
    avatar: "",
    zooLocation: "",
  });

  const onAvatarSelect = useCallback(
    (avatar: string) => {
      setProfile({ ...profile, avatar });
    },
    [profile]
  );

  const onZooSelect = useCallback(
    (zooLocation: string) => {
      setProfile({ ...profile, zooLocation });
    },
    [profile]
  );

  const onNameChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setProfile({ ...profile, name: event.target.value });
    },
    [profile]
  );

  return (
    <>
      <FormStep
        current={currentStep === 0}
        onSubmit={() => setCurrentStep(1)}
        buttonText="Next"
      >
        <h1>What's your name?</h1>
        <StyledInput type="text" value={profile.name} onChange={onNameChange} />
      </FormStep>
      <FormStep
        current={currentStep === 1}
        onSubmit={() => setCurrentStep(2)}
        buttonText="Next"
      >
        <h1>What zoo are you at?</h1>
        <Images>
          {Object.values(ZOOS).map(({ id, description, src }) => (
            <Zoo
              key={id}
              id={id}
              description={description}
              src={src}
              selected={profile.zooLocation === id}
              onClick={onZooSelect}
            />
          ))}
        </Images>
      </FormStep>
      <FormStep
        current={currentStep === 2}
        onSubmit={() => navigate("/chat")}
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
              selected={profile.avatar === id}
              onClick={onAvatarSelect}
            />
          ))}
        </Images>
      </FormStep>
    </>
  );
}

const Images = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 16px;
`;

const StyledInput = styled(Input)`
  width: 200px;
  text-align: center;
`;

const StyledAvatar = styled(Avatar)`
  flex: 1;
`;
