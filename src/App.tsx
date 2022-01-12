import { WelcomeScreen, ChatScreen } from "screens";
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
          <StyledBackground>
            <NavBar />
            <Routes>
              <Route path="/" element={<WelcomeScreen />} />
              <Route path="/chat" element={<ChatScreen />} />
            </Routes>
          </StyledBackground>
        </Router>
      </ChatContextProvider>
    </ApiProvider>
  );
}

const StyledBackground = styled(Background)`
  height: 100vh;
  overflow: hidden;
`;
