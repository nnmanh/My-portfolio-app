import React from 'react';
import './App.css';

function EducationSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description1,
  description2,
  description3,
  imgStart,
  chart
}) {
  return (
    <>
      <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
        <div className='container'>
          <div className='row home__hero-row' style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}} >
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <div className='top-line'>{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p
                  className={lightTextDesc? 'home__hero-subtitle': 'home__hero-subtitle dark'}>
                  {description1}
                </p>
                <p
                  className={lightTextDesc? 'home__hero-subtitle': 'home__hero-subtitle dark'}>
                  {description2}
                </p>
                <p
                  className={lightTextDesc? 'home__hero-subtitle': 'home__hero-subtitle dark'}>
                  {description3}
                </p>
            </div>
          </div>
          <div className='col'>
              <div className='home__hero-chart-wrapper'>
                {chart}
              </div>
            </div>
        </div>
      </div>
    </div>
</>
);
}


export default EducationSection;
