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
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Email yoxlanması
    if (name === 'email') {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        setErrors({ ...errors, email: 'Please enter a valid email address.' });
      } else {
        setErrors({ ...errors, email: '' });
      }
    }

    // Şifrə yoxlanması
    if (name === 'password') {
      if (!value.trim()) {
        setErrors({ ...errors, password: 'Please enter a password.' });
      } else {
        setErrors({ ...errors, password: '' });
      }
    }

    // Daxil edilən məlumatların formData-də saxlanması
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Əgər məlumatlar düzgün deyilsə, hər hansı bir əməliyyat yerinə yetirmə
    if (Object.values(errors).some(error => error)) {
      return;
    }

    // Məlumatlar düzgünsə, istifadəçi məlumatlarını saxla və home səhifəsinə yönləndir
    setUser(formData);
    navigate('/home');
  };

  return (
    <div>
      <h1>Welcome!</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <span>{errors.password}</span>}
        <button type="submit">Login</button>
      </form>
      <h2></h2>
      <button onClick={() => navigate('/register')}>Sign Up</button>
    </div>
  );
};

export default Login;

