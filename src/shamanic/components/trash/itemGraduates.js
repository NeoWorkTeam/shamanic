import React from 'react';
import { Container,Row,Col } from 'react-bootstrap'


const ItemGraduates = ( props ) => {

  
        return (
         
            <Container className="ItemGraduates">

                    <Row>
                        <Col xs={12} md={12} >
                        <h2 className="subtitle"> { props.module } </h2>
                        </Col>
                    </Row>

                     <Row>

                       <Col xs={12} md={8} >
                            <h3> { props.title } </h3>
                        </Col>
                    
                        <Col xs={12} md={4} >
                                <img src={ props.avatar } alt={ props.title } ></img>
                        </Col>

                     </Row>
                     
            </Container>
        )

}


export default ItemGraduates




