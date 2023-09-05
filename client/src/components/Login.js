import React, { useState } from 'react';
import { loginUser } from '../api/authApi';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    // Clear any previous error messages
    setErrorMessage('');

    try {
      
    } catch (error) {
      // Handle error and set the errorMessage state variable
      if (error.response) {
        setErrorMessage(error.response.data.error); // Assuming the error message is provided by the server
      } else {
        setErrorMessage('An error occurred. Please try again.'); // Generic error message
      }
    }
  }

  return (
    <div className="container">
      <h1>Login</h1>
      {/* Display the error message if it exists */}
      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Submit button */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
