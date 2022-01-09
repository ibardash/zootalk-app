import React, { ReactElement } from "react";
import styled from "styled-components";

export interface Props {
  title: string;
  description?: string;
  imageUrl: string;
  content?: ReactElement;
}

export function Card({ title, description, imageUrl, content }: Props) {
  return (
    <OuterContainer>
      <InnerContainer>
        <Image imageUrl={imageUrl} />
        <CardContent>
          <Title>{title}</Title>
          <Description>{description}</Description>
          {content}
        </CardContent>
      </InnerContainer>
    </OuterContainer>
  );
}

const OuterContainer = styled.div`
  display: flex;
  padding: 1rem;
  flex-grow: 1;

  @media (min-width: 25rem) {
    width: 50%;
    flex-grow: 0;
  }

  @media (min-width: 60rem) {
    width: 33%;
  }

  @media (min-width: 80rem) {
    width: 25%;
    padding: 2rem;
  }
`;

const InnerContainer = styled.div`
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  flex: 1;
`;

const Image = styled.div<{ imageUrl: string }>`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  overflow: hidden;
  position: relative;
  background-image: ${({ imageUrl }: { imageUrl: string }) =>
    `url(${imageUrl})`};
  background-position-x: -10px;
  background-size: calc(100% + 20px);

  &:before {
    content: "";
    display: block;
    padding-top: 50%;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem;
`;

const Title = styled.div`
  color: #444444;
  font-size: 0.75rem;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;

  @media (min-width: 25rem) {
    font-size: 1rem;
  }

  @media (min-width: 60rem) {
    font-size: 1.25rem;
  }
`;

const Description = styled.p`
  flex: 1 1 auto;
  margin-bottom: 1.25rem;
  color: #404040;
`;
