import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css";

export default function Auth() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [isGuest, setIsGuest] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  // const [newPassword, setNewPassword] = useState('')
  // const [newUsername, setNewUsername] = useState('')

  // Check if the user is logged in when the component mounts
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Convert token to boolean
  }, []);

  const getApiUrl = () => {
    if (process.env.NODE_ENV === 'development') {
      return 'http://localhost:8080';
    }
    return 'https://personal-portfolio-alexaubin.vercel.app/'; // Replace with your actual deployed backend URL
  };

  const authUser = async (username, password) => {
    try {
      const response = await fetch(`${getApiUrl()}/users/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) throw new Error("Failed to register");

      const data = await response.json();
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.username);
      setIsLoggedIn(true); // Update login status
      alert("Registration successful.");
      navigate("/");
      setUsername("");
      setPassword("");
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration failed. Please try again.");
    }
  };


  const loginUser = async (username, password) => {
    try {
        const response = await fetch("http://localhost:8080/users/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            throw new Error("Login failed");
        }

        const data = await response.json();
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.username);
        setIsLoggedIn(true);
        alert("Login successful.");
        navigate("/");
    } catch (error) {
        console.error("Login error:", error);
        alert("Login failed. Please check your credentials.");
    }
};
  

  const updateUser = async (username, password) => {
    try {
      const response = await fetch(
        `http://localhost:8080/users/${localStorage.getItem("username")}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        }
      );
      if (!response.ok) throw new Error("Failed to update user");
      const data = await response.json();
      localStorage.setItem("username", data.username);
      alert("User updated successfully.");
    } catch (error) {
      console.error("Update user error:", error);
      alert("Failed to update user. Please try again.");
    }
  }
  const handleUpdate = async (e) => {
    e.preventDefault();
    if (newUsername || newPassword) {
      await updateUser(newUsername || username, newPassword || password);
    } else {
      alert("Please provide at least one field to update.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    isLoginMode ? loginUser(username, password) : authUser(username, password);
  };

  const toggleLoginMode = () => {
    setIsLoginMode(!isLoginMode);
    setIsGuest(false);
  };

  const handleGuestLogin = () => {
    setIsGuest(true);
    navigate("/");
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.clear();
    setIsLoggedIn(false); // Update login status
    alert("Successfully logged out!");
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
            <br />
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
               {/* <h2>Update Your Information</h2>
              <form onSubmit={handleUpdate}>
                <label>
                  New Username:
                  <input
                    type="text"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                  />
                </label>
                <br />
                <label>
                  New Password:
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </label>
                <br />
                <button type="submit">Update</button>
              </form> */}
            <label className='username-label-login'>
              Username:
              <input
                className="username-input-login"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label>
            <br />
            <label className="password-label-login">
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
          <button
            className="Ternary-Button"
            type="submit"
            disabled={isLoggedIn} // Disable button if logged in
          >
            {isLoginMode ? "Login" : "Sign Up"}
          </button>
          <button
            className="signup-or-login"
            type="button"
            onClick={() => toggleLoginMode(!isLoginMode)}
          >
            {isLoginMode ? "Sign Up" : "Login"}
          </button>
          {localStorage.getItem("token") && !isGuest && (
            <button className="Logout-Button" onClick={logoutUser}>
              Logout
            </button>
          )}
          <button className="guestButton" onClick={handleGuestLogin}>
            Continue as Guest
          </button>
        </div>
      </form>
      
    </div>
  );
}
