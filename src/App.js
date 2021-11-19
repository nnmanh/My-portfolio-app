import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import ContactMe from './Components/ContactMe.js';
import Education from './Components/Education.js';
import HomePage from './Components/HomePage.js';
import Navbar from './Components/NavBar.js';
import WorkExperience from './Components/WorkExperience.js';

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path ='/' exact component = {HomePage}/>
          <Route path='/work-experience' exact component={WorkExperience}/>
          <Route path='/education' exact component={Education}/>
          <Route path='/contact-me' exact component={ContactMe}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
