import React from "react";
import OwlCarousel from "react-owl-carousel"
import 'owl.carousel/dist/assets/owl.carousel.css';
import ProductCard from "./ProductCard";

function NewArrivals() {
  return (
    <div className="newArrivals">
      <div>NewArrivals</div>
      <OwlCarousel   loop margin={10}  nav>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </OwlCarousel>
    </div>
  );
}

export default NewArrivals;
