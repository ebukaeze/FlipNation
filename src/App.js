import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import PageRenderer from './page-renderer';



function App() {
  const user ={
    firstname: 'John',
    lastname: 'Doe'
  }
  return (
    <div className="App">
    <Router>
    <Navbar  user={user}/>
      <Switch>
      <Route path="/:page" component={PageRenderer}/>
      <Route path='/' render={() => <Redirect to="/home" />} />
      <Route component={() => 404}/>
      
      </Switch>
      <Footer />
     
     </Router>
    </div>
  );
}

export default App;
