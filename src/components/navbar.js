import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const NavBar = props => {
  const loginOrProfile = auth => {
    return auth.isAuthenticated ? (
      <Nav className="float-xs-right" navbar>
        <NavItem className="navbar-text">
          <Link to="/profile">Hi {auth.username}</Link>
        </NavItem>
        <NavItem>
          <Link to="/logout">Logout</Link>
        </NavItem>
      </Nav>
    ) : (
      <Nav className="float-xs-right" navbar>
        <NavItem>
          <NavLink tag={Link} to="/login">
            Log in
          </NavLink>
        </NavItem>
      </Nav>
    );
  };

  return (
    <div>
      <Navbar color="inverse" dark full>
        <NavbarBrand href="/">Example</NavbarBrand>
        {loginOrProfile(props.auth)}
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  auth: PropTypes.object.isRequired
};

export default NavBar;
