import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import logo from '../img/logo.png';

const Header = () => (

    <Container className="header">
    <Row>
        <Col xs={12} md={6} >
            <img alt="title"  src={ logo } style={ { maxWidth:'200px' } }/>
        </Col>    
        <Col xs={12} md={6} >


        </Col>
    </Row>
    </Container>

)

export default Header