import React  from 'react';
import { Container,Row,Col } from 'react-bootstrap'


const CubeModule = (props) => {

     
        return (<Container className="CubeModule" >
            <Row>
            <Col xs={12} md={6} >
                 <h2> { props.title } </h2>
            </Col>
            <Col xs={12} md={6} >
               <img src={props.avatar}  alt={ props.title }/>
            </Col>
            </Row>
        </Container>)

}


export default CubeModule