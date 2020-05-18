import React from 'react';
import { NavLink } from 'react-router-dom'


export default function() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <NavLink to='/'>
        Return to Homepage
      </NavLink>
    </div>
  )
}