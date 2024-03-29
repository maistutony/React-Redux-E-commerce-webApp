import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "../components/NavigationBar";
import SignUp from "../components/signUp";
import LogIn from "../components/Login";
import Home from "../components/Home";
import User from "../components/userPage";
import Products from "../components/Products";
import Cart from "../components/Cart";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import CheckoutPage from "../components/Checkout";

function RoutesComponent() {
  let isAuthenticated = true;
  return (
    <Container fluid>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Products" element={<Products />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<CheckoutPage />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route
          path="/user/:id"
          element={isAuthenticated ? <User /> : <Navigate to="/logIn" />}
        />
      </Routes>
      <Footer />
    </Container>
  );
}

export default RoutesComponent;
