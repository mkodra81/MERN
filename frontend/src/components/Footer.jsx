import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "../styles/footer.css";

const handleSubmit = (e) => {
  alert(
    "Thank you for contacing us. We will get back at you as soon as possible."
  );
};

const Footer = () => {
  return (
    <footer className="text-white py-4" style={{
      backgroundColor: "#1a1a1a"
    }}>
      <Container>
        <Row>
          <Col md={4}>
            <h5 className="mb-3">Quick Links</h5>
            <Nav className="flex-column">
              <Link href="/about" className="text-white">
                About Us
              </Link>
              <Link href="/contact-us" className="text-white">
                Contact Us
              </Link>
              <Link href="/terms-of-service" className="text-white">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-white">
                Privacy Policy
              </Link>
            </Nav>
          </Col>
          <Col md={4}>
            <h5 className="mb-3">Follow Us</h5>
            <Nav className="social-icons">
              <Nav.Link
                href="https://facebook.com"
                className="text-white"
                target="_blank"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </Nav.Link>
              <Nav.Link
                href="https://twitter.com"
                className="text-white"
                target="_blank"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </Nav.Link>
              <Nav.Link
                href="https://instagram.com"
                className="text-white"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Nav.Link>
              <Nav.Link
                href="https://linkedin.com"
                className="text-white"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </Nav.Link>
            </Nav>
          </Col>
          <Col md={4}>
            <h5 className="mb-3">Subscribe to Our Newsletter</h5>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control mb-2"
                required
              />
              <button
                type="submit"
                className="btn btn-primary w-100"
              >
                Subscribe
              </button>
            </form>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} MovieStream. All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
