import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Data/ProductsSlice";
//import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Products() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <Row md={4} className="p-3" >
      {products.map((item) => (
       
          <Col className="mb-3" >
            <ProductCard 
            className="p-3"
              key={item.id}
              product={item}
            />
          </Col>
      ))}
    </Row>
  );
}

export default Products;
