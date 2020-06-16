import React from 'react';
import { Row,Col } from 'react-bootstrap'

import check from '../../img/check.svg'




const ItemIncluded = ( props ) => {
        return (
            <Row className="ItemIncluded">
                 <Col xs={2} md={1} >
                    <img src={check}  alt={ props.title } style={{ width:'50px'} } />
                </Col>
                <Col xs={10} md={11} >
                     <p>{ props.title }</p>
                </Col>
            </Row>
        )
}

export default ItemIncluded