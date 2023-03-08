import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import CardImg from 'react-bootstrap/CardImg'
// import img from '../../src/assets/Nekokoyoshi.jpg'
import img2 from '../../src/assets/logo.svg'
const About = () => {
  return (
  <>
    <Row className='mt-5 mx-auto'>
        <Col className='text-center'>
            <CardImg src={img2}></CardImg>
        </Col>
    </Row>
  </>
    
  )
}

export default About