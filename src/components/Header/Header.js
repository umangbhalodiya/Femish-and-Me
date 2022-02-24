// import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Link,
  NavLink,
} from "react-router-dom";

const Header = () => {
  console.log("first");
  return (
    <>
      <nav className=" d-flex navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <Link className="btn btn-outline-light" to="/users/add">
            Add User
          </Link>
        </div>
      </nav>
    </>
  );
};
export default Header;
