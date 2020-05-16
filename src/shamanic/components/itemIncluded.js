import React from 'react';
import { Row,Col } from 'react-bootstrap'

import Storage from './storage'
const storage = Storage()

const ItemIncluded = ( props ) => {

     
        return (
            <Row className="ItemIncluded">
                 <Col xs={1} md={1} >
                 <img alt={props.title} src={ storage.includesSection.icon }></img>
                </Col>
                <Col xs={11} md={11} >
                     <p> { props.title } </p>
                </Col>
            </Row>
        )

}


export default ItemIncluded




