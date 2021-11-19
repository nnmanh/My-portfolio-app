import React, { Component } from 'react'
import HomePageSection from './HomePageSection.js';

const homeObjOne = {
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'About me',
    headline: 'Data Scientist - Software Engineer',
    description1: 'I am currently working as a Software Engineer at FPT Software. I consider myself to be a quick learner, reliable and enthusiastic person. I want to dive deeper in the field of Machine Learning for getting hands-on experience.',
    link: '/contact-me',
    buttonLabel: 'Contact Me',
    imgStart: '',
    img: require('./Profile.jpg').default,
    alt: 'Profile'
};
  
const homeObjTwo = {
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'TECHNICAL SKILLS',
    headline: 'Experience in Coding and Database',
    description1: "Programming Languages: SQL, Python (NumPy, Pandas, Matplotlib, Scikit-learn), HTML, CSS, React",
    description2: "Tools: SAS – JMP, MS Office 365, MS Power Platform, MS Visual Studio, Azure DevOps",
    description3: "Cloud Computing Services: Microsoft Azure, Amazon Web Services (AWS)",
    description4: "Databases: MS SQL Server, Neo4j, Apache Cassandra",
    link: '/work-experience',
    buttonLabel: 'Learn More',
    imgStart: 'start',
    img: require('./Skills.jpg').default,
    alt: 'Skills'
};
  

function HomePage() {
    return (
        <>
            <HomePageSection {...homeObjOne}/>
            <HomePageSection {...homeObjTwo}/>
        </>
    )
}

export default HomePage
