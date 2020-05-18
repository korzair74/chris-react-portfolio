import React, { Component } from "react";
import { NavLink } from 'react-router-dom'



export default class NavigationComponent extends Component {
  constructor() {
    super();   
 }


  render() {
    return (
      <div>
        <NavLink exact to="/" activeClassName="nav-link-active">
          Home
        </NavLink>

        <NavLink to="/About-me" activeClassName="nav-link-active">
          About
        </NavLink>

        <NavLink to="/Contact" activeClassName="nav-link-active">
          Contact
        </NavLink>

        <NavLink to="/Blog" activeClassName="nav-link-active">
          Blog
        </NavLink>
        

        {false ? <button>Blogg Add</button> : ''}
      </div>
    )
  };
}