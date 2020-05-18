import React, { Component } from "react";
import { NavLink } from 'react-router-dom'



export default class NavigationComponent extends Component {
  constructor() {
    super();   
 }


  render() {
    return (
      <div>
        <NavLink exact to="/">
          Home
        </NavLink>

        <NavLink to="/About-me">
          About
        </NavLink>

        <NavLink to="/Contact">
          Contact
        </NavLink>
        
        <NavLink to="/Blog">
          Blog
        </NavLink>
        

        {false ? <button>Blogg Add</button> : ''}
      </div>
    )
  };
}