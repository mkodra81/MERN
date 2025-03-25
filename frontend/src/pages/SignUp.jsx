import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useUserStore } from "../scripts/userStore.js";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = useUserStore((state) => state.createUser);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    if (form.checkValidity()) {
      createUser({ name, email, password })
        .then(() => {
          alert("User created successfully");
          setName("");
          setEmail("");
          setPassword("");
        })
        .catch((error) => {
          console.error("Error creating user:", error);
          alert("Failed to create user");
        });

      setTimeout(() => {
        window.location.href = "/login";
      }, 500);
    }
  };

  return (
    <div className="min-vh-100 text-white pt-5"  style={{
      background: "rgb(33, 37, 41)"
    }}>
      <Container className="py-5">
        <h2 className="display-4 mb-4 text-center">Sign Up</h2>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mt-3">
                <Form.Label>Email address:</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formPassword" className="mt-3">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Link to="/login" className="d-block mt-3 text-center">
                Already have an account? Login here.
              </Link>

              <Button variant="primary" type="submit" className="mt-4 w-100">
                Sign Up
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUp;
