import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard({imgUrl,name,description}) {
  return (
    <Card style={{ height: '400px' }}>
    <Card.Img variant="top" src={imgUrl}  alt={name} style={{ height: '200px' }} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
     {description}
      </Card.Text>
      <Button variant="primary">Add To cart</Button>
    </Card.Body>
  </Card>
  )
}

export default ProductCard