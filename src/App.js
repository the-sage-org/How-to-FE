import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './component/loginForm';
import Register from './component/registerForm';
import LandingPage from './component/landingPage';
import createGuide from './component/createAGuide';
import viewGuides from './component/viewGuides';
import updateGuide from './component/updateGuide';

export default function App() {
  return (
    <div className='wrapper'>
      <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/create-guide' component={createGuide} />
      <Route exact path='/view-guides' component={viewGuides} />
      <Route exact path='/edit_guide' component={updateGuide} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
      </Switch>
    </div>
  );
}
