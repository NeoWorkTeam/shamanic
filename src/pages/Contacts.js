import React ,{ Component } from 'react'
import Navegation from '../components/navegation/Navegation'
import ContactForm from '../components/contactForm/ContactForm'
import ContactVisor from '../components/contactVisor/ContactVisor'
import ContactList from '../components/contactList/ContactList'
import { Container,Row,Col } from 'react-bootstrap'
import '../pages/style.css'

class Contact extends Component {


  render(){
       return(
        <Container className="contenedor">
            <Navegation></Navegation>
            <Row>
            <Col xs={12}>
                    <h2>All Contacts</h2>
            </Col>
                <Col xs={12}>
                      <ContactList/>
                </Col>   
            </Row>
        </Container>
       )  
  }     
}

export default Contact