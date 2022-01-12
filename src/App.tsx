import { WelcomeScreen } from "./WelcomeScreen";
import { ChatScreen } from "./ChatScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChatContextProvider } from "./ChatContext";
import { ApiProvider } from "./ApiProvider";
import styled from "styled-components";
import { Background } from "./ui";
import { NavBar } from "./components";

export function App() {
  return (
    <ApiProvider>
      <ChatContextProvider>
        <Router>
          <StyledGradientBackground>
            <NavBar />
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
