import React from 'react';
import './App.css';
import { Button } from './Button.js';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub
} from 'react-icons/fa';

function ContactMe() {
  return (
    <div className='footer-container'>
      <section className='footer-heading'>
        <p className='footer-subheading'>
          CONTACT ME
        </p>
        <p className='footer-title'>
        Interested to work together? Let's talk
        </p>
        <div className='input-areas'>
          <form>
          <input
              className='footer-input'
              name='name'
              type='text'
              placeholder='Your Name'
            />
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Send Now</Button>
          </form>
        </div>
      </section>

      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              ANH NGO
            </Link>
          </div>
          <small className='website-rights'>© Copyright 2021. All rights reserved</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to={'//github.com/nnmanh'}
              target='_blank'
              aria-label='Github'
            >
              <FaGithub />
            </Link>
            <Link
              className='social-icon-link'
              to={'//www.facebook.com/maianh.ngonguyen'}
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to={'//www.instagram.com/__mai.anh__/'}
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to={'//www.linkedin.com/in/anh-ngo-10602520b/'}
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactMe;
