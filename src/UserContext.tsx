import { createContext, ReactNode, useContext, useMemo, useState } from "react";

interface User {
  id: string;
  name?: string | null | undefined;
  avatar?: string | null | undefined;
}

interface UserContextType {
  user?: User;
  saveUserDetails: (details: User) => void;
}

const UserContext = createContext<UserContextType>({} as UserContextType);

export function UserContextProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [user, setUser] = useState<User>();

  function saveUserDetails(details: User) {
    setUser(details);
  }

  const context = useMemo(
    () => ({
      user,
      saveUserDetails,
    }),
    [user]
  );

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
}

export default function useUserContext() {
  return useContext(UserContext);
}
