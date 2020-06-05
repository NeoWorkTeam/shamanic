import React  from 'react';
import { Container,Row,Col } from 'react-bootstrap'
import "./cubeModuleStyle.css"


const CubeModule = (props) => {

     
        return (<Container className="CubeModule" >
            <Row>
            <Col xs={12} md={6} >
                 <h2> { props.title } </h2>
                 <p> { props.description }</p>
            </Col>
            <Col xs={12} md={6} >
               <img src={props.avatar}  alt={ props.title }/>
            </Col>
            </Row>
        </Container>)

}


export default CubeModule