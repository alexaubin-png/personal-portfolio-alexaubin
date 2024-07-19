import React from 'react'
import './auth.css'
export default function auth() {
const [password, setPassword] = useState('')
const [username, setUsername] = useState('')
const [isGuest, setIsGuest] = useState('')
const [isLogin, isLoginMode] = useState('')
const [Logout, setLogout] = useState('')

const createUser = async (url, errorMessage) => {
try{
const response = await fetch(url, {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password, email })
})
if(!response.ok) throw new Error(errorMessage)
    const data = await response.json()
    localStorage.setItem("token", data.token)
    localStorage.setItem("username", data.username)
    localStorage.setItem("password", password)
    alert('Registration successful!!!')
    navigate("/")
    setUsername("")
    setPassword("")
}catch(error){
    console.log('internal error')
    console.error("Authentication error:", error.message);
    alert("Invalid credentials. Please try again.");   
    setUsername("");
    setPassword("");


}
}
    const handlesubmit = async (req, res) => {
        preventDefault()
        isLoginMode ? loginUser() : createUser()
    }
    const logoutUser = async (req, res) => {
        localStorage.removeItem("token")
        localStorage.removeItem("username")
        localStorage.removeItem("password")
        localStorage.clear()
        alert('sucessfully logged out!!!')
        navigate("/")
    }
    const IsGuest = async (e) => {
        localStorage.setItem("token")
        setIsGuest()
        Navigate("/")
    }
    return (
      
            <div>
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
         
        ): <div>
          <label>Username: 
          <input className='username-input-login'type='username' value={username} onChange={(e) => setUsername(e.target.value)} required></input><br></br>
          </label>
          <label>Password:<input  className='password-input-login' type='password' value={password} onChange={(e)=> setPassword(e.target.value)} required></input></label>
         </div>}
  
      </form>
      <div className='button-container'>
      <button className='Ternary-Button' type="submit">{isLoginMode ? "Login" : "Sign Up"}</button>
       <div className="ternary-text"> {isLoginMode ? "Don't have an account?" : "Already have an account?"}</div>
        <button className="signup-or-login" type="button" onClick={toggleLoginMode}>
          {isLoginMode ? "Sign Up" : "Login"}
        </button>
        {localStorage.getItem("token") && !isGuest ?
        <button onClick={(logoutUser)}> Logout </button> : null
        }
        <button className="guestButton" onClick={(continueGuest)}>Continue as Guest</button>
      </div>
    </div>
   </div>
    )
    }

