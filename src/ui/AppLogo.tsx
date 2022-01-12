import styled from "styled-components";

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
        <TextBackground>{text}</TextBackground>
      </Text>
      <Blob3 />
      <Blob7 />
      {full ? (
        <>
          <Blob1 />
          <Blob2 />
          <Blob4 />
          <Blob5 />
          <Blob6 />
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

const TextBackground = styled.span`
  &:before {
    background: linear-gradient(45deg, #fc5c7d, #6a82fb, #fc5c7d);
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    content: "";
    mix-blend-mode: screen;
    margin-left: -20px;
    border-radius: 32px;
  }
`;

const Blob = styled.div`
  display: block;
  position: absolute;
  mix-blend-mode: color;
  animation: blobs 15s ease-in-out infinite alternate;

  @keyframes blobs {
    0% {
      border-radius: 26% 74% 61% 39% / 54% 67% 33% 46%;
    }
    10% {
      border-radius: 74% 26% 47% 53% / 68% 46% 54% 32%;
    }
    20% {
      border-radius: 48% 52% 30% 70% / 27% 37% 63% 73%;
    }
    30% {
      border-radius: 73% 27% 57% 43% / 28% 67% 33% 72%;
    }
    40% {
      border-radius: 63% 37% 56% 44% / 25% 28% 72% 75%;
    }
    50% {
      border-radius: 39% 61% 70% 30% / 61% 29% 71% 39%;
    }
    60% {
      border-radius: 27% 73% 29% 71% / 73% 51% 49% 27%;
    }
    70% {
      border-radius: 39% 61% 65% 35% / 74% 65% 35% 26%;
    }
    80% {
      border-radius: 55% 45% 37% 63% / 38% 30% 70% 62%;
    }
    90% {
      border-radius: 25% 75% 70% 30% / 39% 50% 50% 61%;
    }
    100% {
      border-radius: 66% 34% 33% 67% / 65% 73% 27% 35%;
    }
  }
`;

const Blob1 = styled(Blob)`
  background: #ff1493;
  width: 60px;
  height: 60px;
  top: 8%;
  left: 52%;
`;

const Blob2 = styled(Blob)`
  background: #ff4500;
  width: 70px;
  height: 50px;
  top: 57%;
  left: 62%;
`;

const Blob3 = styled(Blob)`
  background: #00ff00;
  width: 60px;
  height: 60px;
  top: 15%;
  left: 0;
`;

const Blob4 = styled(Blob)`
  background: #ff0000;
  width: 70px;
  height: 50px;
  top: 45%;
  left: 27%;
`;

const Blob5 = styled(Blob)`
  background: #ffff00;
  width: 40px;
  height: 40px;
  top: 56%;
  left: 87%;
`;

const Blob6 = styled(Blob)`
  background: #00ffff;
  width: 60px;
  height: 60px;
  top: 11%;
  left: 75%;
`;

const Blob7 = styled(Blob)`
  background: #ff8c00;
  width: 40px;
  height: 40px;
  left: 48px;
  top: 75px;
`;
