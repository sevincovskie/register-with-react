
import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './Contact.css'; // Add this line to import the CSS file

const Contact = () => {
  const { contacts, setContacts } = useContext(AppContext);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    message: ''
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
      setContacts([...contacts, formData]);
      setFormData({
        firstName: '',
        lastName: '',
        address: '',
        email: '',
        message: ''
      });
      setErrors({});
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="firstName" placeholder="First Name" onChange={handleChange} value={formData.firstName} />
        {errors.firstName && <span>{errors.firstName}</span>}
        <input name="lastName" placeholder="Last Name" onChange={handleChange} value={formData.lastName} />
        {errors.lastName && <span>{errors.lastName}</span>}
        <input name="address" placeholder="Address" onChange={handleChange} value={formData.address} />
        {errors.address && <span>{errors.address}</span>}
        <input name="email" placeholder="Email" onChange={handleChange} value={formData.email} />
        {errors.email && <span>{errors.email}</span>}
        <textarea name="message" placeholder="Message" onChange={handleChange} value={formData.message}></textarea>
        {errors.message && <span>{errors.message}</span>}
        <button type="submit">Submit</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td>{contact.firstName}</td>
              <td>{contact.lastName}</td>
              <td>{contact.address}</td>
              <td>{contact.email}</td>
              <td>{contact.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contact;
