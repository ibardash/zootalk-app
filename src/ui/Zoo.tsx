import styled from "styled-components";

export interface ZooProps {
  id: string;
  description: string;
  src: string;
  selected: boolean;
  onClick: (id: string) => void;
}

export function Zoo({ id, description, src, onClick, selected }: ZooProps) {
  return (
    <Container>
      <ImageWrapper>
        <Image
          selected={selected}
          src={src}
          alt={description}
          onClick={() => onClick(id)}
        />
      </ImageWrapper>
      <Description>{description}</Description>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  text-align: center;
  flex: 1;
`;

const ImageWrapper = styled.div``;

const Image = styled.img<{ selected: boolean }>`
  width: 200px;
  height: 200px;
  margin: 0 8px;
  border-radius: 32px;
  border: 16px solid
    ${({ selected }) =>
      selected ? `rgba(255, 255, 255, 50%)` : `rgba(255, 255, 255, 0%)`};
  cursor: pointer;
`;

const Description = styled.h3`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  max-width: 150px;
`;
