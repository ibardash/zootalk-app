import styled from "styled-components";

export interface AvatarProps {
  id: string;
  description?: string;
  src: string;
  selected?: boolean;
  onClick?: (id: string) => void;
  className?: string;
  size?: "s" | "l";
}

export function Avatar({
  id,
  description,
  src,
  onClick,
  selected,
  className,
  size = "l",
}: AvatarProps) {
  return (
    <Container className={className}>
      <Image
        src={src}
        alt={description || id}
        selected={selected}
        onClick={() => onClick?.(id)}
        size={size}
      />
      {description && <Description>{description}</Description>}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  text-align: center;
`;

const Image = styled.img<{ selected?: boolean; size: "s" | "l" }>`
  width: ${({ size }) => (size === "l" ? 200 : 56)}px;
  height: ${({ size }) => (size === "l" ? 200 : 56)}px;
  margin: 0 8px;
  border-radius: 100px;
  border: ${({ size }) => (size === "l" ? 16 : 0)}px solid
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
