import { WelcomeScreen, ChatScreen, ProfileScreen } from "screens";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./UserContext";
import { GraphqlProvider } from "graphql/GraphqlProvider";
import styled from "styled-components";
import { Background } from "./ui";
import { NavBar } from "./components";

export function App() {
  return (
    <GraphqlProvider>
      <UserContextProvider>
        <Router>
          <StyledBackground>
            <NavBar />
            <Routes>
              <Route path="/" element={<WelcomeScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="/chat" element={<ChatScreen />} />
            </Routes>
          </StyledBackground>
        </Router>
      </UserContextProvider>
    </GraphqlProvider>
  );
}

const StyledBackground = styled(Background)`
  height: 100vh;
  overflow: hidden;
`;
