import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { Container, Row,Col} from "react-bootstrap";
import "./components.css";
import LoadingSkeleton from "./Skeleton";

function PopularProducts() {
  //create a data state to hold our data once fetched from the api
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true)
    async function getArrivals(){
      try {
        const response = await axios.get(
          "https://dummyjson.com/products?limit=8",
        );
        const newArrive = response.data;
        setData(newArrive);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
  useEffect(() => {
    getArrivals();
  }, []);
  return (
    <Container fluid className="newArrivals">
      <Row className="headline">
        <h3 className="text-center">Popular Products</h3>
      </Row>
      <Row md={4} className="m-3">
        {loading && data === null && <LoadingSkeleton />}
       {
          data!==null && loading===false && data.products.map((item) => (
            <Col key={item.id} className="mb-2">
              <ProductCard className="m-2" product={item} />
            </Col>
          ))
        }
      </Row>
    </Container>
  );
}

export default PopularProducts;
