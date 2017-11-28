import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';

const NavBar = () => {
  return (
    <AppBar
    title="Guzzle"
    style={{ backgroundColor: '#514fca', zIndex: '10', alignItems: 'center', color: '#000' }}
    showMenuIconButton={false}
    className="navigation" >
      <NavLink
        style={{ marginRight: '30px'}}
        to="/" >
          Home
      </NavLink>
      <NavLink
        style={{ marginRight: '30px'}}
        to="/bars" >
          Search Local Bars
      </NavLink>
      <NavLink
        style={{ marginRight: '30px'}}
        to="/favorites" >
          Favorite Bars
      </NavLink>
    </AppBar>
  )
}

export default NavBar;
