import { MessageBubble } from "./MessageBubble";
import styled from "styled-components";
import { Avatar } from "ui";
import { AVATARS, DEFAULT_AVATAR } from "config";

interface MessageProps {
  content?: string | null | undefined;
  incoming: boolean;
  senderAvatar?: string | null | undefined;
  senderName?: string | null | undefined;
}

export function Message({
  incoming,
  content,
  senderAvatar,
  senderName,
}: MessageProps) {
  const avatar = senderAvatar ? AVATARS[senderAvatar] : DEFAULT_AVATAR;

  return (
    <MessageContainer incoming={incoming}>
      {!incoming && <Avatar id={avatar.id} src={avatar.src} size="s" />}
      <MessageBubble incoming={incoming}>
        <>
          <Sender>{senderName}</Sender>
          {content ? content : <i>Could not retrieve the message</i>}
        </>
      </MessageBubble>
      {incoming && <Avatar id={avatar.id} src={avatar.src} size="s" />}
    </MessageContainer>
  );
}

const MessageContainer = styled.div<{ incoming: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: ${({ incoming }) => (incoming ? `flex-end` : `flex-start`)};
  margin-top: 16px;
`;

const Sender = styled.div`
  font-size: 12px;
  color: #07404f;
  font-weight: 600;
  margin-bottom: 4px;
`;
