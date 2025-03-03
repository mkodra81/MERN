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

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`transition-all duration-500 fs-4 ${
        isScrolled
          ? "dropdown-items-scrolled"
          : "dropdown-transparent"
      }`}
      variant="dark"
    >
      <Container fluid className="px-4">
        <Link to="/" className="nav-link text-white fw-bold">
          MovieStream
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end w-100">
            <Link to="/" className="nav-link text-white">
              Home
            </Link>
            <Link to="/about" className="nav-link text-white">
              About
            </Link>
            <Link to="/contact-us" className="nav-link text-white">
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
                >
                  Create another <br /> account
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/"
                  onClick={logout}
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
