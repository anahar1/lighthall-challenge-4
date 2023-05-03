import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ onLogout }) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <Link to='/lighthall-challenge-4/home' className='navbar-logo' onClick={closeMobileMenu}>
          MealMatch
          <i class='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>          
          <li className='nav-item'>
            <Link
              to='/lighthall-challenge-4/invite'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Invite
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/lighthall-challenge-4/currentdate'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Current Date
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/lighthall-challenge-4/history'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Date History
            </Link>
          </li>
          <li className='nav-item1'>
              UserName      
          </li>
        </ul>
        <Button onLogout={onLogout} />
      </nav>
    </>
  );
}

export default Navbar;
