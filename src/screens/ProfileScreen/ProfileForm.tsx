import { ChangeEvent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Avatar, Input, Zoo, FormStep } from "ui";
import cockatoo from "images/avatar-cockatoo.png";
import koala from "images/avatar-koala.png";
import devil from "images/avatar-tasmanian-devil.png";
import central from "images/sign-central.png";
import east from "images/sign-east.png";
import west from "images/sign-west.png";

const AVATARS = [
  {
    id: "cockatoo",
    description: "Cockatoo",
    src: cockatoo,
  },
  {
    id: "koala",
    description: "Koala",
    src: koala,
  },
  {
    id: "devil",
    description: "Tasmanian Devil",
    src: devil,
  },
];

const ZOOS = [
  {
    id: "west",
    description: "Western Zoo",
    src: west,
  },
  {
    id: "central",
    description: "Central Zoo",
    src: central,
  },
  {
    id: "east",
    description: "Eastern Zoo",
    src: east,
  },
];

export function ProfileForm() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: "",
    avatar: "",
    zooLocation: "",
  });
  const [currentStep, setCurrentStep] = useState(0);

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
          {ZOOS.map(({ id, description, src }) => (
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
          {AVATARS.map(({ id, description, src }) => (
            <Avatar
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
