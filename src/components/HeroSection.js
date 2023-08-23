import React from "react";
import "./components.css";
import Image from "react-bootstrap/Image";
import laptops from "../Images/laptops.png";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate=useNavigate()
  return (
    <Container fluid>
      <div className="row herosection">
        <div className="laptops col-md-6 ">
          <Image fluid src={laptops} alt="Laptops" />
        </div>
        <div className="col2   col-md-6 ">
          <h2 className="text-center p-3">Discover the Future of Living with Our Revolutionary Products</h2>
          <p className="text-center p-3">
            Our revolutionary products are designed to transform the way you
            live and empower you to achieve your full potential.
          </p>
          <Button onClick={()=>navigate("/products")}>Shop Now</Button>
        </div>
      </div>
    </Container>
  );
}

export default HeroSection;
