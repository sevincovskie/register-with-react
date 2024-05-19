
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';


const Login = () => {
  const { setUser } = useContext(AppContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Authentication logic goes here
    setUser(formData); // Simulate successful login
    navigate('/home');
  };

  return (
    <div>
        <h1>Welcome!</h1>
      <form onSubmit={handleSubmit}>
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
      <h2></h2>
      <button onClick={() =>navigate('/register')}>Sign Up</button>
    </div>
  );
};

export default Login;
