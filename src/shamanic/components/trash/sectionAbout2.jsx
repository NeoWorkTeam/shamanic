import React from 'react';
import { Container,Row,Col } from 'react-bootstrap'

import Storage from './storage'
const storage = Storage()


const SectionAbout = (props) => {


        return (<Container id="sectionAbout2" className="section">
            <Row>
            <Col xs={12} md={12} >
               <h2 className="text-center">
               <span className="title"> {  storage.about.title } </span>
               </h2>
            </Col>
        
            <Col xs={12} md={8} >
                <p>
                {  storage.about.text1 }<br/>
                {  storage.about.text2 } <br/>
                {  storage.about.text3 }
                </p>
                    
            </Col>
           
            <Col xs={12} md={4} >

            
            </Col>
            </Row>
        </Container>)
}


export default SectionAbout




