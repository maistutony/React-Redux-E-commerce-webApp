import React, { Fragment } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {Row } from "react-bootstrap";

const LoadingSkeleton = () => {
  const skeletonArray = [...Array(8)]; // Change 12 to the number of products you want to display
  return (
    <Fragment>
        {skeletonArray.map((item, index) => (
          <div key={index}>
            <div className="product-image">
              <Skeleton height={350} />
            </div>
            <Row>
              <Skeleton />
            </Row>
          </div>
        ))}
        </Fragment>
  );
};

export default LoadingSkeleton;
