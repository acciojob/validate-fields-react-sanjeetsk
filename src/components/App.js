
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if ((username.trim() === '' && username.length < 2) || (password.trim() === '' && password.length < 2)) {
      setErrorMsg('Both username and password are required.');
    }
  }

  return (
    <div id="main">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" id="username" >Username</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
        <label htmlFor="password" id="password">Password</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
        <div id="errorMessage" style={{color:"red"}}>{errorMsg}</div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default App
