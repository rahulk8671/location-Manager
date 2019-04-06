import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="main-head">
    <div className="header">

      <div className="header-title">
        <h1 className="title">Location Manager</h1>
      </div>
      
      <div className="header-nav">
        <NavLink className="nav1" to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink className="nav2" to="/create" activeClassName="is-active">Add Location</NavLink>
      </div>
      
    </div>
  </header>
);

export default Header;
