import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {

  // Load user from localStorage if available
  const savedUser = localStorage.getItem("user");

  const [user, setUser] = useState(
    savedUser ? JSON.parse(savedUser) : null
  );

  function login(username) {
    const loggedUser = { name: username };

    setUser(loggedUser);

    localStorage.setItem(
      "user",
      JSON.stringify(loggedUser)
    );
  }

  function logout() {
    setUser(null);

    localStorage.removeItem("user");
  }

  // Optional safety sync
  useEffect(() => {
    if (user) {
      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );
    }
  }, [user]);

  return (
    <AuthContext.Provider
      value={{ user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}