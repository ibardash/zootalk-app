import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export function Button({ className, ...props }: ButtonProps) {
  return (
    <Container className={className}>
      <StyledButton {...props} />
    </Container>
  );
}

const Container = styled.div``;

const StyledButton = styled.button`
  background-color: #fff;
  font-size: 16px;
  font-family: "Raleway";
  border-radius: 16px;
  border-width: 0px;
  padding: 16px;
  cursor: pointer;
  font-weight: 600;
  color: #6a82fb;
  border-bottom-width: 6px;
  border-color: #00ffff;
  width: 100%;

  &:hover {
    background-color: rgba(255, 255, 255, 0.85);
  }

  &:active {
    background-color: rgba(255, 255, 255, 0.85);
    margin-top: 6px;
    border-width: 0px;
  }
`;
