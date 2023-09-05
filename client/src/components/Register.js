import React, { useState } from 'react';
import { registerUser } from '../api/authApi';

function Register() {
  // Define and initialize state variables
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

 
  async function handleSubmit(event) {
    event.preventDefault();

    
    setErrorMessage('');

    

    try {
      
      const token = await registerUser({
        companyName,
        phone,
        email,
        password,
        location,
        link,
        description,
      });

      
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
      <h1>Register</h1>
      {/* Display the error message if it exists */}
      {errorMessage && <div className="error-message">{errorMessage}</div>}

      {/* Your registration form */}
      <form onSubmit={handleSubmit}>
        {/* Form input fields for companyName, phone, email, etc. */}
        {/* Include input elements for each field and bind them to state */}
        {/* Example: */}
        <div className="form-group">
          <label>Company Name</label>
          <input
            type="text"
            name="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
        </div>
        {/* Repeat the above pattern for other input fields */}

        {/* Submit button */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
