import { ReactElement } from "react";
import styled from "styled-components";

export interface MessageBubbleProps {
  children: string | ReactElement;
  incoming?: boolean;
}

export function MessageBubble({
  children: message,
  incoming,
}: MessageBubbleProps) {
  return <OuterContainer incoming={incoming}>{message}</OuterContainer>;
}

const OuterContainer = styled.div<{ incoming?: boolean }>`
  border-radius: 8px;
  background-color: #fff;
  padding: 16px;
  width: fit-content;
  max-width: 400px;
  color: #404040;
  border-radius: ${({ incoming }) =>
    incoming ? `8px 0px 8px 8px` : `0px 8px 8px 8px`};
  align-self: ${({ incoming }) => (incoming ? `flex-end` : `flex-start`)};
  font-size: 16px;
`;
