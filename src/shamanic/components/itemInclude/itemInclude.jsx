import React from 'react';
import { Row,Col } from 'react-bootstrap'
import {  FaInstagram } from 'react-icons/fa';


const ItemIncluded = ( props ) => {
        return (
            <Row className="ItemIncluded">
                 <Col xs={1} md={1} >
                    <FaInstagram/>
                </Col>
                <Col xs={11} md={11} >
                     <p> { props.title } </p>
                </Col>
            </Row>
        )
}

export default ItemIncluded