import { ZOOS } from "config";
import { useCallback, useState } from "react";
import styled from "styled-components";
import { Zoo, FormStep } from "ui";

export interface ProfileFormStep2Props {
  current: boolean;
  onSubmit: (zoo: string) => void;
}

export function ProfileFormStep2({ current, onSubmit }: ProfileFormStep2Props) {
  const [zooLocation, setZooLocation] = useState("");
  const onZooSelect = useCallback((zooLocation: string) => {
    setZooLocation(zooLocation);
  }, []);

  const onSubmitHandler = useCallback(() => {
    if (!zooLocation.length) return;
    onSubmit(zooLocation);
  }, [zooLocation, onSubmit]);

  return (
    <FormStep current={current} onSubmit={onSubmitHandler} buttonText="Next">
      <h1>What zoo are you at?</h1>
      <Images>
        {Object.values(ZOOS).map(({ id, description, src }) => (
          <Zoo
            key={id}
            id={id}
            description={description}
            src={src}
            selected={zooLocation === id}
            onClick={onZooSelect}
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
