import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <div className="container-12">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink className="navbar-brand" to="/">
            E-Library
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/signin">
                  Sign In
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink className="nav-link" to="/signup">
                  Sign Up
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};
export default NavBar;
