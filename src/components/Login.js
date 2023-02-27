import React, { Fragment, useState } from "react";
//import axios from "axios";
import { Form, FormGroup, FormControl, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleLogin = (event) => {
    event.preventDefault();
    if (password && email) {
      const data = {
        email: email,
        password: password,
      };
      setEmail("");
      setPassword("");
      console.log(data)
    } else {
      alert("Fill all the fields");
    }
  };

  return (
    <Fragment>
      <Form className="login" horizontal onSubmit={handleLogin}>
        <h2>Login Form</h2>
        <FormGroup controlId="formHorizontalUsername">
          <Col sm={2}>Email</Col>
          <Col sm={10}>
            <FormControl
              type="email"
              placeholder="email@gmail.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col sm={2}>Password</Col>
          <Col sm={10}>
            <FormControl
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col>
            <Button type="submit">Sign in</Button>
          </Col>
        </FormGroup>
      </Form>
      <div>
        Don't have an account{" "}
        <Link to="/signUp">
          <Button variant="outline-light" size="md">
            Register
          </Button>
        </Link>
      </div>
    </Fragment>
  );
};

export default LoginForm;
