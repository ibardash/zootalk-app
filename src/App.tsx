import { WelcomeScreen } from "./WelcomeScreen";
import { ChatScreen } from "./ChatScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChatContextProvider } from "./ChatContext";
import { ApiProvider } from "./ApiProvider";

function App() {
  return (
    <ApiProvider>
      <ChatContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<WelcomeScreen />} />
            <Route path="/chat" element={<ChatScreen />} />
          </Routes>
        </Router>
      </ChatContextProvider>
    </ApiProvider>
  );
}

export default App;
