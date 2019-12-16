import React, { useState, useReducer } from "react";
import { login } from "./utils";

const loginReducer = (state, action) => {
  return state;
};

export default function LoginUseState() {
  const [state, dispatch] = useReducer(loginReducer, initialState);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, showLoader] = useState(false);
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onSubmit = async e => {
    e.preventDefault();

    setError("");
    showLoader(true);

    try {
      await login({ username, password });
      setIsLoggedIn(true);
      showLoader(false);
    } catch (error) {
      setError("Incorrect username or password!");
      showLoader(false);
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="login_use_state">
      <div className="login-container">
        {isLoggedIn ? (
          <>
            <h1>Welcome {username}!</h1>
            <button onClick={() => setIsLoggedIn(false)}>Log Out</button>
          </>
        ) : (
          <form className="form" onSubmit={onSubmit}>
            {error && <p className="error">{error}</p>}
            <p>Please Login!</p>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={e => setUsername(e.currentTarget.value)}
            />
            <input
              type="password"
              placeholder="password"
              autoComplete="new-password"
              value={password}
              onChange={e => setPassword(e.currentTarget.value)}
            />
            <button className="submit" type="submit" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Log In"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
