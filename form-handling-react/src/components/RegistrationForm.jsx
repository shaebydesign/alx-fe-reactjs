import { useState } from 'react';

function RegistrationForm() {
  // Step 1: Create state variables to hold form input values
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Step 2: Handle input changes
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  // Step 3: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh on form submission
    // Handle the form data here (e.g., send it to an API)
    console.log('Submitted:', { username, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange} // Bind state to input
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange} // Bind state to input
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange} // Bind state to input
          required
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
