import { useState } from 'react';

function RegistrationForm() {
  // Step 1: Create state variables to hold form input values and errors
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  // Step 2: Handle input changes
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  // Step 3: Handle form submission with basic validation
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh on form submission

    // Reset errors
    setErrors({});

    // Basic validation
    const newErrors = {};

    if (!username) {
      newErrors.username = 'Username is required';
    }

    if (!email) {
      newErrors.email = 'Email is required';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    }

    // If there are errors, update state and don't submit form
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If no errors, handle the form data (e.g., send it to an API)
    console.log('Form Submitted:', { username, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
        {errors.username && <p className="error">{errors.username}</p>} {/* Display error message */}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        {errors.email && <p className="error">{errors.email}</p>} {/* Display error message */}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        {errors.password && <p className="error">{errors.password}</p>} {/* Display error message */}
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
