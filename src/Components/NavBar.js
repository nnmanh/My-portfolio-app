import React, {useState} from 'react';
import './App.css';
import './Button.js';
import {Link} from 'react-router-dom';
import {IoPersonOutline} from 'react-icons/io5';
import {AiOutlineBars} from 'react-icons/ai';
import {FaTimes } from 'react-icons/fa';
import { Button } from './Button.js';


function NavBar(){
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [button, setButton] = useState(true);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
        <div className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo'>
                <IoPersonOutline className='navbar-icon' />
              ANH NGO
            </Link>
            
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <AiOutlineBars />}
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  About Me 
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/work-experience' className='nav-links' onClick={closeMobileMenu}>
                  Work Experience
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/education' className='nav-links' onClick={closeMobileMenu}>
                  Education
                </Link>
              </li>
              <li className='nav-btn'>
                {button ? (
                  <Link to='/contact-me' className='btn-link'>
                    <Button buttonStyle='btn--outline'>Contact Me</Button>
                  </Link>
                  ) : (
                  <Link to='/contact-me' className='btn-link'>
                    <Button buttonStyle='btn--outline' buttonSize='btn--mobile' onClick={closeMobileMenu}>
                      CONTACT ME
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
    </>
  )
}

export default NavBar
