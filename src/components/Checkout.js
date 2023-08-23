import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const CheckoutPage = () => {
  return (
    <Container className="py-5">
      <h2>Checkout</h2>
      <Row>
        <Col md={6}>
          <h4>Shipping Information</h4>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Enter your address" />
            </Form.Group>
            <Form.Group controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="Enter your city" />
            </Form.Group>
            <Form.Group controlId="zip">
              <Form.Label>ZIP Code</Form.Label>
              <Form.Control type="text" placeholder="Enter ZIP code" />
            </Form.Group>
          </Form>
        </Col>
        <Col md={6}>
          <h4>Payment Information</h4>
          <Form>
            <Form.Group controlId="cardNumber">
              <Form.Label>Card Number</Form.Label>
              <Form.Control type="text" placeholder="Enter card number" />
            </Form.Group>
            <Form.Group controlId="expiry">
              <Form.Label>Expiry Date</Form.Label>
              <Form.Control type="text" placeholder="MM/YY" />
            </Form.Group>
            <Form.Group controlId="cvv">
              <Form.Label>CVV</Form.Label>
              <Form.Control type="text" placeholder="Enter CVV" />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <div className="mt-4">
        <Button variant="primary" type="submit">
          Place Order
        </Button>
      </div>
    </Container>
  );
};

export default CheckoutPage;
