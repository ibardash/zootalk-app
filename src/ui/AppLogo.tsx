import styled from "styled-components";
import "./BlobText.css";

export function AppLogo({
  className,
  full,
}: {
  className?: string;
  full?: boolean;
}) {
  const text = full ? "ZooTalk" : "Z";

  return (
    <Container className={className} full={full}>
      <Text>
        <span>{text}</span>
      </Text>
      <div className="blob blobs_3"></div>
      <div className="blob blobs_7"></div>
      {full ? (
        <>
          <div className="blob blobs_1"></div>
          <div className="blob blobs_2"></div>
          <div className="blob blobs_4"></div>
          <div className="blob blobs_5"></div>
          <div className="blob blobs_6"></div>
        </>
      ) : null}
    </Container>
  );
}

const Container = styled.div<{ full?: boolean }>`
  position: relative;
  text-align: center;
  padding: 0 20px;
  background-color: #fff;
  border-radius: 32px;
  ${({ full }: { full?: boolean }) => (full ? "" : "transform: scale(0.5);")}
`;

const Text = styled.div`
  display: flex;
  font-family: "Titan One", cursive;
  font-size: 90px;
  line-height: 120px;
  font-weight: 700;
`;
