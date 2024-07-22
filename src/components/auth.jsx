import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './auth.css';

export default function Auth() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [isGuest, setIsGuest] = useState(false);

  const createUser = async () => {
    // Function definition
  };

  const loginUser = async () => {
    // Function definition
  };

  const logoutUser = async () => {
    // Function definition
  };

  const IsGuest = () => {
    setIsGuest(true);
    navigate('/');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    isLoginMode ? loginUser() : createUser();
  };

  return (
    <div className="container-section">
      <h1 className='Login-Title'>{isLoginMode ? "Login" : "Sign Up"}
        <label className='prompt-overlay'>To Sponsor A Stop</label>
      </h1>
      <form onSubmit={handleSubmit}>
        {!isLoginMode ? (
          <>
            <label className='username-label'>
              Username:
              <input
                className='username-input-signup'
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label><br></br>
            <label>
              Password:
              <input
                className='password-input-signup'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
          </>
        ) : (
          <div>
            <label>Username:
              <input
                className='username-input-login'
                type='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label><br></br>
            <label>Password:
              <input
                className='password-input-login'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
          </div>
        )}
        <div className='button-container'>
          <button className='Ternary-Button' type="submit">{isLoginMode ? "Login" : "Sign Up"}</button>
          <div className="ternary-text">{isLoginMode ? "Don't have an account?" : "Already have an account?"}</div>
          <button className="signup-or-login" type="button" onClick={() => setIsLoginMode(!isLoginMode)}>
            {isLoginMode ? "Sign Up" : "Login"}
          </button>
          {localStorage.getItem("token") && !isGuest ?
            <button onClick={logoutUser}> Logout </button> : null
          }
          <button className="guestButton" onClick={IsGuest}>Continue as Guest</button>
        </div>
      </form>
    </div>
  );
}
