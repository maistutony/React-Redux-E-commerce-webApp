import React, { useEffect,useState} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";
import { Container, Row,Col } from "react-bootstrap";
import "./components.css";
import axios from "axios"
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function NewArrivals() {
   const responsive = {
     superLargeDesktop: {
       // the naming can be any, depends on you.
       breakpoint: { max: 4000, min: 3000 },
       items: 5,
     },
     desktop: {
       breakpoint: { max: 3000, min: 1024 },
       items: 4,
     },
     tablet: {
       breakpoint: { max: 1024, min: 464 },
       items: 2,
     },
     mobile: {
       breakpoint: { max: 464, min: 0 },
       items: 1,
     },
   };

  //create a data state to hold our data once fetched from the api
  const [data, setData] = useState(null);
  const [loading,setLoading]=useState(true)
  const skeletonArray = [...Array(6)];
      async function getArrivals() {
        try {
          const response = await axios.get(
            "https://dummyjson.com/products?limit=12",
          );
          const newArrive = response.data;
          setData(newArrive.products);
          setLoading(false);
        } catch (error) {
          console.log(error.response.status);
        }
      };

  useEffect(() => {
      setTimeout(getArrivals(),2000);
  }, [])
  return (
    <Container fluid className="newArrivals py-3">
      <Row className="headline">
        <h3 className="text-center">New Arrivals</h3>
      </Row>
      <Row>
        <Carousel
          responsive={responsive}
          itemClass="carousel-item-padding-40-px"
          dotListClass="custom-dot-list-style"
          containerClass="carousel-container"
          transitionDuration={500}
          autoPlaySpeed={3000}
          ssr={true}
          infinite={true}
          autoPlay={true}
        >
          {loading &&
            data === null &&
            skeletonArray.map((item, index) => (
              <Col key={index}>
                <div className="product-image">
                  <Skeleton height={350} />
                </div>
                <Row>
                  <Skeleton />
                </Row>
              </Col>
            ))}
          {loading === false &&
            data !== null &&
            data.map((item) => <ProductCard key={item.id} product={item} />)}
        </Carousel>
      </Row>
    </Container>
  );
}

export default NewArrivals;
