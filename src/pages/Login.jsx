import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../features/auth/useAuth";

export default function Login() {
  const [username, setUsername] = useState("");
  const { login } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  // If redirected from a protected route
  const from = location.state?.from?.pathname || "/";

  function handleSubmit(e) {
    e.preventDefault();

    if (!username.trim()) return;

    login(username);

    // redirect after login
    navigate(from, { replace: true });
  }

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <br />

          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
        </div>

        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}