import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import AxiosFormApp from './AxiosFormApp';
import Test from './Test';
import Nav from './Nav';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container py-3" >
          <h1>React Router Practice</h1><hr />
          <Nav />
          <Switch>
            {/* <Route path='/' exact render={() => {
              return <Home name='PROPS' />
            }} /> */}
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/AxiosFormApp' component={AxiosFormApp} />
            <Route path='/posts/:postId' component={Test} />
          </Switch>
        </div >
      </BrowserRouter>
    );
  }
}

export default App;

// Route configure
// Route
// URL parameter
// Private route


// To-do list :
// ============
// Step-1 : Wrap our Application with BrowserRouter
// Step-2 : Create some Route
// Step-3 : 