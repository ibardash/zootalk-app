import { AVATARS } from "config";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { AppLogo, Avatar } from "ui";
import useUserContext from "UserContext";

export function NavBar() {
  const location = useLocation();
  const { user } = useUserContext();
  const avatar = user?.avatar && AVATARS[user.avatar];

  return location.pathname === "/" ? null : (
    <Container>
      <Link to="/">
        <AppLogo />
      </Link>
      {avatar && <Avatar id={avatar.id} src={avatar.src} size="s" />}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  position: absolute;
  background: rgba(255, 255, 255, 25%);
  padding: 16px;
  -webkit-box-shadow: 0px 8px 18px 4px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 8px 18px 4px rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: space-between;
`;
