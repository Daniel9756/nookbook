import React, { useState } from 'react';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header'
import Resume from './Components/Resume/Resume'
import MyWork from './Components/MyWork/MyWork'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {fas, faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from './Components/Contacts/Contacts';
import Sidebar from './Components/Sidebar/Sidebar';


 
library.add(fab, fas, faCheckSquare, faCoffee)



function App() {
  const [ sidebarOpen, setSidebarOpen ] = useState(false)
  
const sidebarHandler = () => {
  if(!sidebarOpen){
    setSidebarOpen(true)
  }else{
    setSidebarOpen(false)
  }
}
let sidebar
if(sidebarOpen){
  sidebar =  <Sidebar sidebar={"sidebar"} onClose={sidebarHandler} />
}
    const routes = [
     
      {
        path: "/",
        exact: true,
        itembar: () => <div>HOME</div>,
        main: () => (
          <>

            <Home />
          </>
        ),
      },
      {
        path: "/Resume",
        itembar: () => <div>RESUME</div>,
        main: () => (
          <>
            <Resume />
          </>
        ),
      },
      {
        path: "/MyWork",
        itembar: () => <div>MyWork</div>,
        main: () => (
          <>
            <MyWork />
          </>
        ),
      },
      {
        path: "/Contacts",
        itembar: () => <div>Contact</div>,
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
          <Header  open={sidebarHandler}/>
         {sidebar}
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
 


export default App;
