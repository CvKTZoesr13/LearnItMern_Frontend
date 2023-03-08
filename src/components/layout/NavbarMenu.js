import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import learnItLogo from "../../assets/logo.svg";
import logoutIcon from "../../assets/logout.svg";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
const NavbarMenu = () => {
  const {
    authState: {
      user: { username },
    },
    logoutUser
  } = useContext(AuthContext);

  const logout = () => logoutUser()
  return (
    <Navbar expand="lg" bg="primary" variant="dark" className="shadow">
      <Navbar.Brand className="text-white fw-border fw-semibold">
        <img
          src={learnItLogo}
          alt="LearnIt Logo"
          width={32}
          height={32}
          className="me-2 ms-4"
        />
        <span className="text-white fw-border fw-semibold">LearnIt</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="mx-4" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto mx-4">
          <Nav.Link
            className="fw-border fw-semibold text-white"
            to="/dashboard"
            as={Link}
          >
            Dashboard
          </Nav.Link>
          <Nav.Link
            className="fw-border fw-semibold text-white"
            to="/about"
            as={Link}
          >
            About
          </Nav.Link>
        </Nav>

        <Nav>
          <Nav.Link className="fw-border fw-semibold text-white mx-4" disabled>
            Welcome {username}
          </Nav.Link>
          <Button
            variant="secondary"
            className="fw-border fw-semibold text-white mx-4"
            onClick={logout}
          >
            <img
              src={logoutIcon}
              alt="Logout icon"
              width={32}
              height={32}
              className="me-2"
            />
            Logout
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarMenu;
