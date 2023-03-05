import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { Container, Row,Col} from "react-bootstrap";
import "./components.css";

function PopularProducts() {
  //create a data state to hold our data once fetched from the api
  const [data, setData] = useState(null);
  useEffect(() => {
    const getArrivals = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products?limit=8",
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
        <h3 className="text-center">Popular Products</h3>
      </Row>
      <Row md={4} className="m-3" >
      { data!==null && (data.products.map((item) => (
       
          <Col className="mb-3" >
            <ProductCard 
            className="m-3"
              key={item.id}
              name={item.title}
              imgUrl={item.images[0]}
              description={item.description}
            />
          </Col>
      )) )}
    </Row>
    </Container>
  );
}

export default PopularProducts;
