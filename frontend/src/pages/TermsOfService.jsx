import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const TermsOfService = () => {
  return (
    <div className="text-white pt-5" style={{ background: "rgb(33, 37, 41)" }}>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <h1 className="display-3 fw-bold mb-4">Terms of Service</h1>
            <p className="lead mb-4">
              Welcome to our Terms of Service page. Please read the following terms carefully.
            </p>
            <h2 className="fw-bold mb-3">1. Introduction</h2>
            <p>
              These terms and conditions outline the rules and regulations for the use of our website.
            </p>
            <h2 className="fw-bold mb-3">2. Intellectual Property Rights</h2>
            <p>
              Other than the content you own, under these terms, we own all the intellectual property rights and materials contained in this website.
            </p>
            <h2 className="fw-bold mb-3">3. Restrictions</h2>
            <p>You are specifically restricted from all of the following:</p>
            <ul className="text-start">
              <li>Publishing any website material in any other media</li>
              <li>Selling, sublicensing and/or otherwise commercializing any website material</li>
              <li>Publicly performing and/or showing any website material</li>
              <li>Using this website in any way that is or may be damaging to this website</li>
              <li>Using this website in any way that impacts user access to this website</li>
            </ul>
            <h2 className="fw-bold mb-3">4. Your Content</h2>
            <p>
              In these website standard terms and conditions, "Your Content" shall mean any audio, video text, images or other material you choose to display on this website.
            </p>
            <h2 className="fw-bold mb-3">5. No warranties</h2>
            <p>
              This website is provided "as is," with all faults, and we express no representations or warranties, of any kind related to this website or the materials contained on this website.
            </p>
            <h2 className="fw-bold mb-3">6. Limitation of liability</h2>
            <p>
              In no event shall we, nor any of our officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this website.
            </p>
            <h2 className="fw-bold mb-3">7. Indemnification</h2>
            <p>
              You hereby indemnify to the fullest extent us from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these terms.
            </p>
            <h2 className="fw-bold mb-3">8. Severability</h2>
            <p>
              If any provision of these terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.
            </p>
            <h2 className="fw-bold mb-3">9. Variation of Terms</h2>
            <p>
              We are permitted to revise these terms at any time as we see fit, and by using this website you are expected to review these terms on a regular basis.
            </p>
            <h2 className="fw-bold mb-3">10. Assignment</h2>
            <p>
              We are allowed to assign, transfer, and subcontract our rights and/or obligations under these terms without any notification.
            </p>
            <h2 className="fw-bold mb-3">11. Entire Agreement</h2>
            <p>
              These terms constitute the entire agreement between us and you in relation to your use of this website, and supersede all prior agreements and understandings.
            </p>
            <h2 className="fw-bold mb-3">12. Governing Law & Jurisdiction</h2>
            <p>
              These terms will be governed by and interpreted in accordance with the laws of the State of [Your State], and you submit to the non-exclusive jurisdiction of the state and federal courts located in [Your State] for the resolution of any disputes.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TermsOfService;