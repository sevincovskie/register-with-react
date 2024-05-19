
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const navigate =useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      if (!formData[key]) {
        newErrors[key] = 'Error';
      }
    });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert('Registered!');
      navigate('/login');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="firstName" placeholder="First Name" onChange={handleChange} />
      {errors.firstName && <span>{errors.firstName}</span>}
      <input name="lastName" placeholder="Last Name" onChange={handleChange} />
      {errors.lastName && <span>{errors.lastName}</span>}
      <input name="phone" placeholder="Phone" onChange={handleChange} />
      {errors.phone && <span>{errors.phone}</span>}
      <input name="address" placeholder="Address" onChange={handleChange} />
      {errors.address && <span>{errors.address}</span>}
      <input name="email" placeholder="Email" onChange={handleChange} />
      {errors.email && <span>{errors.email}</span>}
      <input name="password" type="password" placeholder="Password" onChange={handleChange} />
      {errors.password && <span>{errors.password}</span>}
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Register;
