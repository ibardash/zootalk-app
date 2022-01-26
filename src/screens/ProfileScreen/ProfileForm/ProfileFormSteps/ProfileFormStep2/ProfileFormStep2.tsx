import { ZOOS } from "config";
import { useCallback, useState } from "react";
import styled from "styled-components";
import { Zoo, FormStep } from "ui";
import { useZoosQuery } from "./zoos.generated";

export interface ProfileFormStep2Props {
  current: boolean;
  onSubmit: (zoo: string) => void;
}

export function ProfileFormStep2({ current, onSubmit }: ProfileFormStep2Props) {
  const [zooLocation, setZooLocation] = useState<string | undefined>();
  const { data, loading } = useZoosQuery();

  const onZooSelect = useCallback(
    (zooLocation: string) => {
      setZooLocation(zooLocation);
    },
    [setZooLocation]
  );

  const onSubmitHandler = useCallback(() => {
    if (!zooLocation || !data) return;

    const zooId = data.zoos?.find(
      (zoo) => zoo.location.toLowerCase() === zooLocation.toLowerCase()
    )?.id;

    if (zooId) onSubmit(zooId);
  }, [zooLocation, data, onSubmit]);

  return loading ? null : (
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
