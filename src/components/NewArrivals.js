import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ProductCard from "./ProductCard";
import axios from "axios";
import { Container, Row } from "react-bootstrap";
import "./components.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {Col} from "react-bootstrap"

function NewArrivals() {
  //these are the setting to configure the carousel
  const options = {
    nav: true,
    navClass: ["my-prev-button", "my-next-button"],
    responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
    },
  };

  //create a data state to hold our data once fetched from the api
  const [data, setData] = useState(null);
  const [loading,setLoading]=useState(true)
  const skeletonArray = [...Array(6)];
  useEffect(() => {
    const getArrivals = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products?limit=12",
        );
        const newArrive = await response.data;
        setData(newArrive);
        setLoading(false);
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
      {(loading && data===null)?
      <OwlCarousel
      {...options}
      className="owl owl-theme"
      loop={true}
      autoplay={true}
      margin={10}
      nav
    >
         {skeletonArray.map((item, index) => (
          <Col key={index} >
            <div className="product-image">
              <Skeleton height={350} />
            </div>
            <Row>
              <Skeleton />
            </Row>
          </Col>
        ))}
    </OwlCarousel>
           :(
        <OwlCarousel
          {...options}
          className="owl owl-theme"
          loop={true}
          autoplay={true}
          margin={10}
          nav
        >
          {data.products.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
            />
          ))}
        </OwlCarousel>
      )}
    </Container>
  );
}

export default NewArrivals;
