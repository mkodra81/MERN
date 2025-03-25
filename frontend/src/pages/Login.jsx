import React, { useEffect, useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useUserStore } from "../scripts/userStore.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const users = useUserStore((state) => state.users);
  const setUser = useUserStore((state) => state.setUser);
  const fetchUsers = useUserStore((state) => state.fetchUsers);

  useEffect(() => {
    const fetch = async () => {
      try {
        await fetchUsers();
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetch();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    const user = users.find((u) => u.email === email);
    if (user) {
      if (user.password === password) {
        setUser(user);
        alert("Login successful");
        setTimeout(() => {
          window.location.href = "/";
        }, 500);
      } else {
        alert("Incorrect password");
      }
    } else {
      alert("User not found");
    }
  };

  return (
    <div className="min-vh-100 text-white pt-5" style={{
      background: "rgb(33, 37, 41)"
    }}>
      <Container className="py-5">
        <h2 className="display-4 mb-4 text-center">Login</h2>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Email"
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
              <Link to="/signup" className="d-block mt-3 text-center">
                Don't have an account? Sign up here.
              </Link>
              <Link to="/" className="d-block mt-3 text-center">
                Continue as guest
              </Link>
              <Button variant="primary" type="submit" className="mt-4 w-100">
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
