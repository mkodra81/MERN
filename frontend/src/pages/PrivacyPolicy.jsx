import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const PrivacyPolicy = () => {
  return (
    <div className="min-vh-100 text-white pt-5" style={{ background: "rgb(33, 37, 41)" }}>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <h1 className="display-3 fw-bold mb-4">Privacy Policy</h1>
            <p className="lead mb-4">
              Your privacy is important to us. This privacy policy explains how we collect, use, and protect your information.
            </p>
            <h2 className="fw-bold mb-3">1. Information We Collect</h2>
            <p>
              We may collect personal information from you when you use our website, including but not limited to your name, email address, and payment information.
            </p>
            <h2 className="fw-bold mb-3">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to provide and improve our services, communicate with you, and process transactions.
            </p>
            <h2 className="fw-bold mb-3">3. Data Protection</h2>
            <p>
              We take appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
            </p>
            <h2 className="fw-bold mb-3">4. Sharing Your Information</h2>
            <p>
              We do not sell or rent your personal information to third parties. We may share your information with trusted partners to help us operate our website and provide services to you.
            </p>
            <h2 className="fw-bold mb-3">5. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information. You can also object to the processing of your data in certain circumstances.
            </p>
            <h2 className="fw-bold mb-3">6. Changes to This Privacy Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on our website.
            </p>
            <h2 className="fw-bold mb-3">7. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy, please contact us at support@example.com.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PrivacyPolicy;