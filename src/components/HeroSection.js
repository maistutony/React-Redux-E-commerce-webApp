import React from "react";
import "./components.css";
import Image from "react-bootstrap/Image";
//import Card from 'react-bootstrap/Card';
import laptops from "../Images/laptops.png";
//import wave from "../Images/wave.png";
import { Container,Button } from "react-bootstrap";

function HeroSection() {
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
          <Button>Shop Now</Button>
        </div>
        {/* <div className="col-md-6">
           
      </div>
      <div className="headline col-md-6">
      <h2>Power your future your dream through our revolutional Products</h2>
      </div> */}
      </div>
    </Container>
  );
}

export default HeroSection;
