import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import logo from '../img/logo.png';
import logoBlanco from '../img/logo_blanco.png';

import {  FaFacebookSquare } from 'react-icons/fa';




import Storage from './storage'
const storage = Storage()

const Footer = (props) => {

     
    return ( <Container className="footer">
    <Row>
    <Col xs={12} md={6} >
          {
          props.pages === '2' ?  <img alt="title"   className="logo" src={ logo }/> : <img alt="title"   className="logo" src={ logoBlanco }/>
          }         
    </Col>
   
  
    <Col xs={12} md={6} >

               <Row>
               <Col xs={12} md={12} >
                         <a href={storage.facebook}  target="blank">
                         <FaFacebookSquare />
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
    </Container>)

}

export default Footer