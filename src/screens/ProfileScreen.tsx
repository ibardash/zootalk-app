import { ChangeEvent, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, Avatar, Input, Zoo } from "ui";
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

export function ProfileScreen() {
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
    <Container>
      <h1>What's your name?</h1>
      <StyledInput type="text" value={profile.name} onChange={onNameChange} />
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
      <Link to="/chat">
        <StyledButton>Start chatting</StyledButton>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-y: scroll;
  padding-top: 122px;
`;

const Images = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 16px;
`;

const StyledInput = styled(Input)`
  width: 200px;
  text-align: center;
`;

const StyledButton = styled(Button)`
  margin-bottom: 32px;
`;
