import React,{useState} from 'react';
import { Container,Row,Col } from 'react-bootstrap'
import ContactForm from '../contactForm'
import Storage from '../storage'
const storage = Storage()

const SectionForm = () => {
     
        return (<Container className='sectionForm'>
            <Row>
            
            <Col xs={12} md={12} >
               <h1 className="text-center">
                        <span className="titlePrincipal"> { storage.banner.title01 } </span>
                        <span className="subtitle"> { storage.banner.title02 } </span> 
                        <span className="title"> { storage.banner.title03 } </span> 
               </h1>
            </Col>

            <Col xs={12} md={12} className="contactWrapper">
                    <ContactForm ></ContactForm>
            </Col>
            
            </Row>
        </Container>)

}


export default SectionForm




