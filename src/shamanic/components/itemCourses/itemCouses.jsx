import React from 'react';
import { Container,Row,Col } from 'react-bootstrap'
import './itemCoursesStyles.css'


const ItemCourses = ( props ) => {

  
        return (
         
            <Container  className="ItemCourses">

                    <Row>
                        <Col xs={12} md={12} >
                        <h3> { props.module } </h3>
                        </Col>
                    </Row>

                     <Row>

                       <Col xs={12} md={7} >
                            <h2> { props.title } </h2>
                            <p> { props.description } </p>
                        </Col>
                    
                        <Col xs={12} md={5} >
                                <img src={ props.avatar } alt={ props.title } ></img>
                        </Col>

                     </Row>
                     
            </Container>
        )

}


export default ItemCourses




