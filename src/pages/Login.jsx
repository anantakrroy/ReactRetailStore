import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../features/auth/useAuth";
import toast from "react-hot-toast";

export default function Login() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  function handleSubmit(e) {
    e.preventDefault();

    if (!username.trim()) {
      setError(true);
      toast.error("Username is required");
      return;
    }

    setError(false);
    login(username);
    navigate(from, { replace: true });
  }

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <div className="flex flex-col">
            <label className="mb-1 font-medium">Username</label>

            <input
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                if (e.target.value.trim()) setError(false);
              }}
              placeholder="Enter username"
              className={`border rounded-md px-3 py-2 focus:outline-none 
              ${error ? "bg-red-100 border-red-500" : "focus:ring-2 focus:ring-blue-400"}`}
            />
          </div>

          <button
            type="submit"
            className="bg-green-400 hover:bg-green-600 text-white font-semibold py-2 rounded-md transition"
          >
            Login
          </button>

        </form>
      </div>
    </div>
  );
}