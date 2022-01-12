import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { AppLogo } from "ui";

export function NavBar() {
  const location = useLocation();
  return location.pathname === "/" ? null : (
    <Container>
      <Link to="/">
        <AppLogo />
      </Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  position: absolute;
  background: rgba(255, 255, 255, 35%);
  padding: 16px;
  -webkit-box-shadow: 0px 8px 18px 4px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 8px 18px 4px rgba(0, 0, 0, 0.2);
  align-items: center;
`;
