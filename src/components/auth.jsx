import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css";

export default function Auth() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [isGuest, setIsGuest] = useState(false);

  const authUser = async (url, errorMessage) => {
    // Function definition
    try {
      const response = await fetch('http://localhost:8080/users/register', {
        //404 not found response perhaps try fet ching the endpoint directly to acsess the code directly
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      if (!response.ok) throw new Error("failed to register");

      const data = await response.json();
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.username);
      alert("user created successfully");
      navigate("/");
      setUsername("");
      setPassword("");
    } catch (error) {
      console.log("failed to register", error);
      alert("invalid creds"); //consider turning alerts  into user feedback rendered directly under the inputs using create element in a conditonal that also checsk the leng th and casing of the users inputs
    }
  };

  // const loginUser = () => authenticateUser(`${process.env.REACT_APP_API_URL}/users/login`, "Login failed");
  // const createUser = () => authUser(`${process.env.REACT_APP_API_URL}/users/register`, "Signup failed");

  const handleSubmit = async (e) => {
    e.preventDefault();
    isLoginMode ? loginUser() : authUser();
  };

  const toggleLoginMode = () => {
    setIsLoginMode(!isLoginMode);
    IsGuest(false);
  };

  const logoutUser = async () => {
    // Function definition
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.clear();
    alert("sucessfully logged out!!!");
    navigate("/");
  };

  const IsGuest = () => {
    setIsGuest(true);
    navigate("/");
  };

  return (
    <div className="container-section">
      <h1 className="Login-Title">
        {isLoginMode ? "Login" : "Sign Up"}
        <label className="prompt-overlay">To Create Blog Posts</label>
      </h1>
      <form onSubmit={handleSubmit}>
        {!isLoginMode ? (
          <>
            <label className="username-label">
              Username:
              <input
                className="username-input-signup"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label>
            <br></br>
            <label className="password-signup-label">
              Password:
              <input
                className="password-input-signup"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
          </>
        ) : (
          <div>
            <label>
              Username:
              <input
                className="username-input-login"
                type="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label>
            <br></br>
            <label>
              Password:
              <input
                className="password-input-login"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
          </div>
        )}
        <div className="button-container">
          <button className="Ternary-Button" type="submit">
            {isLoginMode ? "Login" : "Sign Up"}
          </button>
          <div className="ternary-text">
            {isLoginMode
              ? "Don't have an account?"
              : "Already have an account?"}
          </div>
          <button
            className="signup-or-login"
            type="button"
            onClick={() => setIsLoginMode(!isLoginMode)}
          >
            {isLoginMode ? "Sign Up" : "Login"}
          </button>
          {localStorage.getItem("token") && !isGuest ? (                                          
            <button className='Logout-Button' onClick={logoutUser}> Logout </button>
          ) : null}
          <button className="guestButton" onClick={IsGuest}>
            Continue as Guest
          </button>
        </div>
      </form>
    </div>
  );
}
