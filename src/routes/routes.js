import React from "react";
import { Route, Routes,Navigate } from "react-router-dom";
import NavBar from "../components/Navbar";
import SignUp from "../components/signUp";
import LogIn from "../components/Login";
import Home from "../components/Home";
import User from "../components/userPage";

function routes() {
  let isAuthenticated =true;
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LogIn/>}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route
        path="/user/:id"
        element={
          isAuthenticated ? (
            <User/>
          ) : (
            <Navigate to="/logIn" />
          )
        }
      />
      </Routes>
    </div>
  );
}

export default routes;
