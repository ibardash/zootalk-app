import { WelcomeScreen } from "./WelcomeScreen";
import { ChatScreen } from "./ChatScreen";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ChatContextProvider } from "./ChatContext";
import { ApiProvider } from "./ApiProvider";
import styled from "styled-components";
import { AppLogo, Background } from "./ui";

export function App() {
  return (
    <ApiProvider>
      <ChatContextProvider>
        <Router>
          <StyledGradientBackground>
            <NavBar>
              <Link to="/">
                <AppLogo />
              </Link>
            </NavBar>
            <Routes>
              <Route path="/" element={<WelcomeScreen />} />
              <Route path="/chat" element={<ChatScreen />} />
            </Routes>
          </StyledGradientBackground>
        </Router>
      </ChatContextProvider>
    </ApiProvider>
  );
}

const StyledGradientBackground = styled(Background)`
  height: 100vh;
  overflow: hidden;
`;

const NavBar = styled.div`
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
