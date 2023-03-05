import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ProductCard from "./ProductCard";
import axios from "axios";
import { Container, Row } from "react-bootstrap";
import "./components.css";

function NewArrivals() {
  //these are the setting to configure the carousel
  const options = {
    nav: true,
    navClass: ["my-prev-button", "my-next-button"],
  };

  //create a data state to hold our data once fetched from the api
  const [data, setData] = useState(null);
  useEffect(() => {
    const getArrivals = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products?limit=12",
        );
        const newArrive = await response.data;
        setData(newArrive);
      } catch (error) {
        console.log(error.message);
      }
    };
    getArrivals();
  }, []);
  return (
    <Container fluid className="newArrivals">
      <Row className="headline">
        <h3 className="text-center">New Arrivals</h3>
      </Row>
      {data !== null && (
        <OwlCarousel
          options={options}
          className="owl owl-theme"
          loop={true}
          autoplay={true}
          margin={10}
          nav
        >
          {data.products.map((item) => (
            <ProductCard
              name={item.title}
              description={item.description}
              imgUrl={item.images[0]}
            />
          ))}
        </OwlCarousel>
      )}
    </Container>
  );
}

export default NewArrivals;
