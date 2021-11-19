import React from 'react';
import './App.css';
import { Button } from './Button.js';
import { Link } from 'react-router-dom';

function HomePageSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description1,
  description2,
  description3,
  description4,
  link,
  component,
  buttonLabel,
  img,
  alt,
  imgStart
}) {
  return (
    <>
      <div
        className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
      >
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <div className='top-line'>{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle dark'
                  }
                >
                  {description1}
                </p>
                <p
                  className={
                    lightTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle dark'
                  }
                >
                  {description2}
                </p>
                <p className={lightTextDesc? 'home__hero-subtitle': 'home__hero-subtitle dark'}>
                  {description3}
                </p>
                <p className={ lightTextDesc? 'home__hero-subtitle' : 'home__hero-subtitle dark' }>
                  {description4}
                </p>
                <Link to={link} exact component = {component}>
                  <Button buttonSize='btn--wide' buttonColor='blue'>
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper'>
                <img src={img} alt={alt} className='home__hero-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePageSection;
