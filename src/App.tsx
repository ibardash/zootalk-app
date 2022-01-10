import { WelcomeScreen } from "./WelcomeScreen";
import { ChatScreen } from "./ChatScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChatContextProvider } from "./ChatContext";

function App() {
  return (
    <ChatContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/chat" element={<ChatScreen />} />
        </Routes>
      </Router>
    </ChatContextProvider>
  );
}

export default App;
