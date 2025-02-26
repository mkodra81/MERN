import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <div
      className="min-vh-100 text-white pt-5"
      style={{ background: "rgb(33, 37, 41)" }}
    >
      {/* Hero Section */}
      <div className="hero-section position-relative mb-5">
        <div
          className="w-100"
          style={{
            height: "400px",
            backgroundImage: 'url("/about-hero.jpg")', // Make sure this image exists
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.5)",
          }}
        />
        <Container className="position-absolute top-50 start-50 translate-middle text-center">
          <h1 className="display-3 fw-bold mb-3">Welcome to MovieStream</h1>
          <p className="lead">Your Ultimate Entertainment Destination</p>
        </Container>
      </div>

      {/* About Content Section */}
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <h2 className="fw-bold mb-4">Who We Are</h2>
            <p className="lead">
              MovieStream is more than just a streaming service; it's a
              revolution in entertainment. We bring you an extensive library of
              films, series, and exclusive originals from around the globe.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center mt-4">
          <Col lg={6}>
            <h3 className="fw-bold text-center">Our Mission</h3>
            <p className="text-center">
              Our goal is to provide an exceptional viewing experience for
              movie lovers everywhere. With cutting-edge technology and a
              user-friendly interface, we make discovering and enjoying content
              easier than ever.
            </p>
          </Col>
          <Col lg={6}>
            <h3 className="fw-bold text-center">What We Offer</h3>
            <p className="text-center">
              🎬 Thousands of movies & TV shows <br />
              🚀 High-quality streaming with no interruptions <br />
              🔥 Exclusive content you won’t find anywhere else <br />
              🌎 Global reach with localized content <br />
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center mt-5">
          <Col lg={8} className="text-center">
            <h3 className="fw-bold">Join Us Today</h3>
            <p>
              Whether you’re a casual viewer or a cinema fanatic, MovieStream
              has something for you. Dive into a world of entertainment and
              experience movies like never before.
            </p>
            <a href="/signup" className="btn btn-primary btn-lg mt-3">
              Sign Up
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
