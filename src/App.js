import React, { Component } from 'react';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header'
import Resume from './Components/Resume/Resume'
import MyWork from './Components/MyWork/MyWork'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {fas, faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from './Components/Contacts/Contacts';

 
library.add(fab, fas, faCheckSquare, faCoffee)



class App extends Component {
  state = {  }
  render() {
    const routes = [
     
      {
        path: "/",
        exact: true,
        sidebar: () => <div>HOME</div>,
        main: () => (
          <>
            <Home />
          </>
        ),
      },
      {
        path: "/Resume",
        sidebar: () => <div>RESUME</div>,
        main: () => (
          <>
            <Resume />
          </>
        ),
      },
      {
        path: "/MyWork",
        sidebar: () => <div>MyWork</div>,
        main: () => (
          <>
            <MyWork />
          </>
        ),
      },
      {
        path: "/Contacts",
        sidebar: () => <div>Contact</div>,
        main: () => (
          <>
            <Contact />
          </>
        ),
      },
    ]
    return ( 
      <Router>
        <div className="app">
          <Header />
          
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                component={route.main}
                exact={route.exact}
              />
            ))}
          </Switch>
        </div>
      </Router>
     );
  }
}
 


export default App;
