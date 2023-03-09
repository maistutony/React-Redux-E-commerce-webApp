import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import { FiPlus } from 'react-icons/fi';
import { FaMinus } from 'react-icons/fa';
import { FiTrash2 } from 'react-icons/fi';
import { useSelector,useDispatch} from 'react-redux';
import { removeFromCart,increaseQuantity,decreaseQuantity } from '../Data/CartSlice';

function Cart() {
 const dispatch= useDispatch();
 const {cartProducts}=useSelector((state)=>state.cart)

  const total = cartProducts.reduce((accumulator, product) => {
    return accumulator + product.price * product.quantity;
  }, 0);

  return (
    <Container fluid className='my-3'> 
      <Row>
        <Col lg={8}>
          {cartProducts.length!==0 && cartProducts.map((product) => (
            <Row key={product.id} className="mb-3">
              <Col xs={3} lg={2}>
                <Image src={product.images[0]} fluid rounded />
              </Col>
              <Col xs={9} lg={5}>
                <h5>{product.title}</h5>
                <p>{product.description}</p>
              </Col>
              <Col xs={12} lg={5}>
                <Row className="">
                  <Col xs={4} className="text-center">
                  <Button className='quantity' onClick={()=>{dispatch(decreaseQuantity(product.id))}}><FaMinus /></Button>
                  </Col>
                  <Col xs={4} className="text-center">
                    <p >{product.quantity}</p>
                  </Col>
                  <Col xs={4} className="text-center"> 
                  <Button  className='quantity' onClick={()=>{dispatch(increaseQuantity(product.id))}}><FiPlus/></Button>
                  </Col>
                </Row>
                <Row className="align-items-center">
                <Col xs={6} className="text-end">
                    <p className="m-0">Price:${product.price}</p>
                  </Col>
                  <Col xs={6} className="text-end">
                   <Button  className='trash' onClick={()=>{dispatch(removeFromCart(product.id))}}><FiTrash2/></Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          ))}
        </Col>
        <Col lg={4}>
          <Card>
            <Card.Body>
              <Card.Title>Order Summary</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Total Items: {cartProducts.length}</Card.Subtitle>
              <hr />
              <Card.Text>
                Subtotal: ${total}
              </Card.Text>
              <Button variant="primary">Checkout</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
