import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useUserStore } from "../movies/userStore.js";
import "../styles/navbar.css";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const user = useUserStore((state) => state.user);
  const logout = useUserStore((state) => state.logout);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavItemClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`transition-all duration-500 fs-4 ${
        isScrolled ? "dropdown-items-scrolled" : "dropdown-transparent"
      }`}
      variant="dark"
    >
      <Container fluid className="px-4">
        <Link to="/" className="nav-link text-white fw-bold" onClick={handleNavItemClick}>
          MovieStream
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end w-100">
            <Link to="/" className="nav-link text-white" onClick={handleNavItemClick}>
              Home
            </Link>
            <Link to="/about" className="nav-link text-white" onClick={handleNavItemClick}>
              About
            </Link>
            <Link to="/contact-us" className="nav-link text-white" onClick={handleNavItemClick}>
              Contact Us
            </Link>

            {user ? (
              <NavDropdown
                title={user.name}
                id="signed-in-dropdown"
                className="pe-5"
              >
                <NavDropdown.Item
                  as={Link}
                  to="/login"
                  className={
                    isScrolled
                      ? "dropdown-items-scrolled"
                      : "dropdown-transparent"
                  }
                  onClick={handleNavItemClick}
                >
                  Login with <br /> another account
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/signup"
                  className={
                    isScrolled
                      ? "dropdown-items-scrolled"
                      : "dropdown-transparent"
                  }
                  onClick={handleNavItemClick}
                >
                  Create another <br /> account
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/"
                  onClick={() => {
                    logout();
                    handleNavItemClick();
                  }}
                  className={
                    isScrolled
                      ? "dropdown-items-scrolled"
                      : "dropdown-transparent"
                  }
                >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown title="Guest" id="basic-nav-dropdown">
                <NavDropdown.Item
                  as={Link}
                  to="/login"
                  className={
                    isScrolled
                      ? "dropdown-items-scrolled"
                      : "dropdown-transparent"
                  }
                  onClick={handleNavItemClick}
                >
                  Login
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/signup"
                  className={
                    isScrolled
                      ? "dropdown-items-scrolled"
                      : "dropdown-transparent"
                  }
                  onClick={handleNavItemClick}
                >
                  Sign Up
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;