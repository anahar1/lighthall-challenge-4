import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export const Button = ({ onLogout }) => {
  const handleLogout = () => {
    onLogout();
  };

  return (
    <Link to='/lighthall-challenge-4/'>
      <button className='btn' onClick={handleLogout}>Log Out</button>
    </Link>
  );
}