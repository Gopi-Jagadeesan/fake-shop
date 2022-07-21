import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar bg-light fixed-top shadow">
        <div className="container-fluid container d-block">
          <div className="row">
            <div className="col-md-2">
              <NavLink to="/">
                <img
                  src="https://zerozilla.com/static/media/applogo.753908a08e13c14b01f7976de9884093.svg"
                  alt="logo"
                  style={{ height: "50px" }}
                />
              </NavLink>
            </div>
            <div className="col-md-8">
              <div class="input-group rounded">
                <input
                  type="search"
                  class="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
                <span class="input-group-text border-0" id="search-addon">
                  <i class="fa fa-search"></i>
                </span>
              </div>
            </div>
            <div className="col-md-2">
              <i className="fa fa-shopping-cart"></i>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
