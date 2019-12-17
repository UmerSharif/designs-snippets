import React, { useReducer } from "react";
import { login } from "./utils";

const loginReducer = (state, action) => {
  switch (action.type) {
    case "field":
      return {
        ...state,
        [action.field]: action.value
      };
    case "login":
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case "success":
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false
      };

    case "error":
      return {
        ...state,
        error: "Incorrect username or password!",
        isLoading: false,
        username: "",
        password: ""
      };
    case "logout":
      return {
        ...state,
        isLoggedIn: false
      };

    default:
      break;
  }
  return state;
};

const initialState = {
  username: "",
  password: "",
  isLoading: false,
  error: "",
  isLoggedIn: false
};

export default function LoginUseState() {
  const [state, dispatch] = useReducer(loginReducer, initialState);

  const { username, password, isLoading, error, isLoggedIn } = state; // destruturing the state values

  const onSubmit = async e => {
    e.preventDefault();

    dispatch({ type: "login" });

    try {
      await login({ username, password });

      dispatch({ type: "success" });
    } catch (error) {
      dispatch({ type: "error" });
    }
  };

  return (
    <div className="login_use_state">
      <div className="login-container">
        {isLoggedIn ? (
          <>
            <h1>Welcome {username}!</h1>
            <button onClick={() => dispatch({ type: "logout" })}>
              Log Out
            </button>
          </>
        ) : (
          <form className="form" onSubmit={onSubmit}>
            {error && <p className="error">{error}</p>}
            <p>Please Login!</p>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={e =>
                dispatch({
                  type: "field",
                  field: "username",
                  value: e.currentTarget.value
                })
              }
            />
            <input
              type="password"
              placeholder="password"
              autoComplete="new-password"
              value={password}
              onChange={e =>
                dispatch({
                  type: "field",
                  field: "password",
                  value: e.currentTarget.value
                })
              }
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
