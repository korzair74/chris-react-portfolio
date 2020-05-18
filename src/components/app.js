import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import moment from "moment";


import NavigationContainer from "./Navigation/navigation-container";
import Home from "./Pages/home";
import About from "./Pages/about";
import Contact from "./Pages/contact";
import Blog from "./Pages/blog";
import PortfolioDetail from "./portfolio/portfolio-detail"
import NoMatch from './Pages/no-match'
export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div>
          <h1>Chris Nickel React Portfolio</h1>
          {moment().format('MMMM Do YYYY, h:mm:ss a')}
         </div>

        <Router>
           <NavigationContainer />
           <Switch>
             <Route exact path="/" component={Home} />
             <Route path="/About-me" component={About} />
             <Route path="/Contact" component={Contact} />
             <Route path="/Blog" component={Blog} />
             <Route exact path="/portfolio/:slug" component={PortfolioDetail} />
             <Route component={NoMatch} />
           </Switch>
        </Router>
      </div>
    );
  }
}
