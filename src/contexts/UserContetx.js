import React, { useState } from "react";

const UserContext = React.createContext();

export function UserProvider(props) {
  const { children } = props;

  const [email, setEmail] = useState(null);

  return (
    <UserContext.Provider value={{ email, setEmail }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;