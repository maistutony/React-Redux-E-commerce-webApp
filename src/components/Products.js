import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Data/ProductsSlice";
import { Row, Col } from "react-bootstrap";

function Products() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      {" "}
      <Row md={4} className="p-3">
        {products.map((item) => (
          <Col key={item.id} className="mb-3">
            <ProductCard className="p-3" product={item} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Products;
