import React,{ Component } from 'react';
import { Container,Row,Col } from 'react-bootstrap'
import Navegation from '../navegation/Navegation'
import ContactForm from '../contactForm/ContactForm'
import ContactVisor from '../contactVisor/ContactVisor'
import Loading from '../loading/Loading'
import '../../pages/style.css'

const ContactInterface = ({ form, onChange, onSubmit }) => (
    <Container className="contenedor">
        <Navegation></Navegation>
        <Row>
        <Col xs={12}>
                <h2>Contact Us</h2>
        </Col>
            <Col xs={6}>
                  <ContactVisor { ...form } ></ContactVisor>
            </Col>  
            <Col xs={6}>
                <ContactForm
                 onChange={onChange}
                 form={form}
                 onSubmit={onSubmit}
                 >
                 </ContactForm>
            </Col>  
        </Row>
    </Container>
)

export default ContactInterface