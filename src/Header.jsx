import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header class="main-header">
        <a href="/" class="logo">
          {/* <img src = ""/> */}
          <div class="logo-name"> OneStep</div>
        </a>
        <nav class="main-nav">
          <ul>
            <li>
              <NavLink> Survey </NavLink>
            </li>
            <li>
              <NavLink> Our Solutions </NavLink>
            </li>
            <li>
              <NavLink> About </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
