import { createContext, ReactNode, useContext, useMemo, useState } from "react";

interface User {
  name: string;
}

interface ChatContextType {
  user?: User;
  login: (name: string) => void;
}

const ChatContext = createContext<ChatContextType>({} as ChatContextType);

export function ChatContextProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [user, setUser] = useState<User>();

  function login(name: string) {
    setUser({ name });
  }

  const memoedValue = useMemo(
    () => ({
      user,
      login,
    }),
    [user]
  );

  return (
    <ChatContext.Provider value={memoedValue}>{children}</ChatContext.Provider>
  );
}

export default function useChatContext() {
  return useContext(ChatContext);
}
