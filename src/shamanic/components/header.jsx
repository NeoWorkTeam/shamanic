import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import logo from '../img/footer_logo_white.jpg';




import Storage from './storage'
const storage = Storage()

const Header = () => (

    <Container className="header">
    <Row>
        <Col xs={12} md={6} >
            <img alt="title"  src={ logo }/>
        </Col>    
        <Col xs={12} md={6} >


        </Col>
    </Row>
    </Container>

)

export default Header