import React from 'react'
import { Button,Card } from 'react-bootstrap';
import { addToCart } from '../Data/CartSlice';
import { useDispatch } from 'react-redux';

function ProductCard(props) {
  const {price,title,images}=props.product;
  const dispatch = useDispatch();
  return (
    <Card style={{ height: '350px' }}>
    <Card.Img variant="top" src={images[0]}  alt={title} style={{ height: '200px' }} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
    </Card.Body>
    <Card.Footer className='card-footer'>
        <Card.Text>$ {price}</Card.Text>
        <Button variant="primary" onClick={()=>{dispatch(addToCart(props.product))}}>Add to Cart</Button>
      </Card.Footer>
  </Card>
  )
}

export default ProductCard