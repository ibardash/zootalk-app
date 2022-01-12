import styled from "styled-components";
import "./BlobText.css";

export function BlobText({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <Container>
      <Text>
        <span>{children}</span>
      </Text>
      <div className="blob blobs_1"></div>
      <div className="blob blobs_2"></div>
      <div className="blob blobs_3"></div>
      <div className="blob blobs_4"></div>
      <div className="blob blobs_5"></div>
      <div className="blob blobs_6"></div>
      <div className="blob blobs_7"></div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  text-align: center;
  padding: 0 20px;
  background-color: #fff;
  border-radius: 32px;
`;

const Text = styled.div`
  display: flex;
  font-family: "Titan One", cursive;
  font-size: 90px;
  line-height: 120px;
  font-weight: 700;
`;
