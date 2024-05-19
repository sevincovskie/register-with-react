
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';

const Home = () => {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();


  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div>
      <h1>Welcome,{user.email}</h1>
      <h2>{user.firstName}</h2>
      <Navigation />
    </div>
  );
  
};

export default Home;
