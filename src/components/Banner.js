import React from 'react'
import bannerImage from "../Images/banner.jpg"
import { Container,Image } from 'react-bootstrap'

function Banner() {
  return (
    <Container fluid >
       <Image fluid src={bannerImage} alt="banner-image" style={{ height: '400px' ,width: "100%"}} />
    </Container>
  )
}

export default Banner