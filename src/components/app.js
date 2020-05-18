import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import moment from "moment";


import PortfolioContainer from "./portfolio/portfolio-container"
import NavigationContainer from "./Navigation/navigation-container"
import Home from "./Pages/home"
import About from "./Pages/about"
export default class App extends Component {
  render() {
    return (
      <div className='app'>
        

        <Router>
          <div>
           <NavigationContainer />

           <Switch>
             <Route exact path="/" component={Home} />
             <Route path="/About-me" component={About} />
           </Switch>
          </div>
        </Router>

        <h1>Chris Nickel React Portfolio</h1>
          <div>
            {moment().format('MMMM Do YYYY, h:mm:ss a')}
          </div>
          <PortfolioContainer />
      </div>
    );
  }
}
