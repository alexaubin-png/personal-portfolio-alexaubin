import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './auth.css';
import myImage from '../../src/assets/lock.png';
export default function Auth() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [isGuest, setIsGuest] = useState(false);

  const createUser = async (req, res) => {
    // Function definition
    try{
      const response = await fetch('http://localhost:5173/register',{
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({ 
          username: username,
          password: password
        })
    });
      if (!response.ok) throw new Error("failed to register")

      const data =  await response.json()
        localStorage.setItem("token", data.token)
        localStorage.setItem("username", data.username)
        alert('user created successfully')
        navigate('/login')
        setUsername('')
        setPassword('')

    }catch(error){
      console.log(error);
      alert('user created successfully')
      setUsername('')
      setPassword('')
    }
  };

  const loginUserVerification = () => createUser(`${process.env.REACT_APP_API_URL}/users/login`, "Login failed");
  const authenticateUser = () => createUser(`${process.env.REACT_APP_API_URL}/users/register`, "Signup failed");

  const handleSubmit = async (e) => {
    e.preventDefault();
    isLoginMode ? loginUser() : createUser();
  };
 
  const toggleLoginMode = () => {
    setIsLoginMode(!isLoginMode);
    IsGuest(false)
  }

  const logoutUser = async () => {
    // Function definition
    localStorage.removeItem("token")
    localStorage.removeItem("username")
    localStorage.removeItem("password")
    localStorage.clear()
    alert('sucessfully logged out!!!')
    navigate("/")
  };

  const IsGuest = () => {
    setIsGuest(true);
    navigate('/');
  };




  return (
    <div className="container-section">
      <h1 className='Login-Title'>{isLoginMode ? "Login" : "Sign Up"}
        <label className='prompt-overlay'>To Create Blog Posts</label>
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
            <label className='password-signup-label'>
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
          <button className="signup-or-login" type="button" onClick={toggleLoginMode}>
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
