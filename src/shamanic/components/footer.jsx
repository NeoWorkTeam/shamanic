import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import logo from '../img/logo.png';
import {  AiOutlineFacebook } from 'react-icons/ai';



import Storage from './storage'
const storage = Storage()

const Footer = () => (

    <Container className="footer">
    <Row>
    <Col xs={12} md={6} >
         <img alt="title"   className="logo" src={ logo }/>
    </Col>
   
  
    <Col xs={12} md={6} >

               <Row>
               <Col xs={12} md={12} >
                         <a href={storage.facebook}  target="blank">
                         <AiOutlineFacebook />
                         </a>
               </Col>
                         </Row>
         
         <Row>
            <Col xs={12} md={12} >
                 <p> { storage.footer.copyright } </p> 
            </Col>
         </Row>

    </Col>

    </Row>
    </Container>

)

export default Footer