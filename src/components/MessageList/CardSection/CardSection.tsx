import React from "react";
import styled from "styled-components";
import { Card, Props as CardItem } from "./Card";

interface Props {
  title: string;
  items: CardItem[];
}

export function CardSection({ title, items }: Props) {
  return (
    <>
      <Title>{title}</Title>
      <CardsContainer>
        {items.map(({ title, description, imageUrl, content }, i) => (
          <Card
            key={i}
            title={title}
            description={description}
            imageUrl={imageUrl}
            content={content}
          />
        ))}
      </CardsContainer>
    </>
  );
}

export function LoadingState({ title }: Omit<Props, "items">) {
  return (
    <>
      <Title>{title}</Title>
      <Subtitle>Loading...</Subtitle>
    </>
  );
}

export function ErrorState({ title }: Omit<Props, "items">) {
  return (
    <>
      <Title>{title}</Title>
      <Subtitle>Sorry, something went wrong. Try reloading the page.</Subtitle>
    </>
  );
}

CardSection.Loading = LoadingState;
CardSection.Error = ErrorState;

const Title = styled.h2`
  text-align: center;

  @media (min-width: 60rem) {
    display: none;
  }
`;

const Subtitle = styled.h3`
  text-align: center;
  margin-top: 10rem;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`;
