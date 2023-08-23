import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaGooglePlus, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-light text-muted py-5">
      <Container>
        <Row>
          <Col md={4}>
            <h4>Company Info</h4>
            <ul>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
              <li>
                <a href="#terms">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="#privacy">Privacy Policy</a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h4>Connect with Us</h4>
            <ul className="list-inline social-icons">
              <li className="list-inline-item">
                <a href="#facebook">
                  <FaFacebook />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#twitter">
                  <FaTwitter />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#google">
                  <FaGooglePlus />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#LinkedIn">
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h4>Newsletter</h4>
            <p>Sign up for our newsletter to receive the latest news and updates</p>
            <form>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Enter your email address" />
                <button type="submit" className="btn btn-primary mt-2">Subscribe</button>
              </div>
            </form>
          </Col>
        </Row>
        <hr />
        <p className="text-center">&copy; 2023 Athi Fashions. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
