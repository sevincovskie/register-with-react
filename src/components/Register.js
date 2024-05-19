import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
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
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Məlumatların boş olmadığını yoxlayırıq
    const newErrors = {};
    for (const key in formData) {
      if (!formData[key].trim()) {
        newErrors[key] = 'This field is required';
      }
    }

    // Emailin düzgün formatda daxil edilib-edilmədiyini yoxlayırıq
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Yoxlama səhvləri mövcudsa, onları göstərərək funksiyanı bitiririk
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Yoxlama səhvləri yoxdursa, qeydiyyat tamamlanır
    alert('Registered!');
    navigate('/login');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
      />
      {errors.firstName && <span>{errors.firstName}</span>}
      <input
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
      />
      {errors.lastName && <span>{errors.lastName}</span>}
      <input
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
      />
      {errors.phone && <span>{errors.phone}</span>}
      <input
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
      />
      {errors.address && <span>{errors.address}</span>}
      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <span>{errors.email}</span>}
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      {errors.password && <span>{errors.password}</span>}
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Register;


