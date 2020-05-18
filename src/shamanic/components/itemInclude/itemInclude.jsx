import React from 'react';
import { Row,Col } from 'react-bootstrap'
import {  BsCheckCircle } from 'react-icons/bs';


const ItemIncluded = ( props ) => {
        return (
            <Row className="ItemIncluded">
                 <Col xs={1} md={1} >
                    <BsCheckCircle/>
                </Col>
                <Col xs={11} md={11} >
                     <p> { props.title } </p>
                </Col>
            </Row>
        )
}

export default ItemIncluded