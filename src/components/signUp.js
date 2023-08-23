import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { setUser} from "../Data/UserSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  function handleRegister(payload) {
       dispatch(setUser(payload));
  }

  const handleRegistration = (data) => {
    handleRegister(data)
    navigate("/login")
    reset();
  };
  const handleError = (errors) => {
    console.log(errors);
  };

  const registerOptions = {
    username: { required: "Name is required" },
    email: { required: "Email is required" },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters",
      },
    },
  };

  return (
    <div className="w-100 d-flex flex-column justify-content-center align-items-center registration-form">
      <h4 className="register-h4">Registration Form</h4>
      <Form
        className="text-dark w-50"
        onSubmit={handleSubmit(handleRegistration, handleError)}
      >
        <Form.Group controlId="email">
          <Form.Label className="form-label">Email</Form.Label>
          <Form.Control
            className="form-input"
            type="email"
            name="email"
            {...register("email", registerOptions.email)}
          />
          {errors.email && errors.email.type === "required" && (
            <p className="errorMsg">Email is required.</p>
          )}
        </Form.Group>

        <Form.Group controlId="username">
          <Form.Label className="form-label">Username</Form.Label>
          <Form.Control
            className="form-input"
            type="text"
            name="username"
            {...register("username", registerOptions.username)}
          />
          {errors.username && errors.username.type === "required" && (
            <p className="errorMsg">username is required.</p>
          )}
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label className="form-label">Password</Form.Label>
          <Form.Control
            className="form-input"
            type="password"
            name="password"
            {...register("password", registerOptions.password)}
          />
          {errors.password && errors.password.type === "minLength" && (
            <p className="errorMsg">min of 8 character is required.</p>
          )}
          {errors.password && errors.password.type === "required" && (
            <p className="errorMsg">password is required.</p>
          )}
        </Form.Group>
        <Button  className="register-button" variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
