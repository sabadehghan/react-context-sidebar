import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useGlobalContext } from "../utils/context";

export default function Login() {
  const { dispatch } = useGlobalContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch({ type: "USER_LOGIN", payload: { username, password } });
    localStorage.setItem("userInfo", JSON.stringify({ username, password }));
    navigate("/");
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h5>login</h5>
      <div className="form-row">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="username"
          className="form-input"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-row">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-input"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-block">
        login
      </button>
    </form>
  );
}
