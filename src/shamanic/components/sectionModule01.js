import React  from 'react';
import { Container,Row,Col } from 'react-bootstrap'


const SectionModule01 = (props) => {

     
        return (<Container id="SectionModule01" className="section">
            <Row>
            <Col xs={12} md={6} >
                 <h2 className="title"> { props.title } </h2>
            </Col>
            <Col xs={12} md={6} >
               <img src={props.avatar}  alt={ props.title }/>
            </Col>
            </Row>
        </Container>)

}


export default SectionModule01




