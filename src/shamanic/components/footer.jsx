import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import logo from '../img/footer_logo_white.jpg';
import {  FaInstagram } from 'react-icons/fa';
import {  AiOutlineFacebook } from 'react-icons/ai';
import { RiYoutubeLine } from 'react-icons/ri';



import Storage from './storage'
const storage = Storage()

const Footer = () => (

    <Container className="footer">
    <Row>
    <Col xs={12} md={6} >
         <img alt="title"  src={ logo }/>
    </Col>
   
    <Col xs={12} md={3} >


    </Col>
    <Col xs={12} md={3} >

         <Row>
            <Col xs={4} md={4} >
           <a href={storage.facebook}  target="blank">
            <AiOutlineFacebook />
           </a>

            </Col>
            <Col xs={4} md={4} >
            <a href={storage.instagram}  target="blank">

                    <FaInstagram />
                    </a>
            </Col>
            <Col xs={4} md={4} >
            <a href={storage.youtube}  target="blank">

                      < RiYoutubeLine />
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