import React from 'react'
import {Navbar,Nav,Col,Row,Container,NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Link as Link2, animateScroll as scroll } from "react-scroll";

 
function  Navegation(){

  const   scrollToTop = () => {
        scroll.scrollToTop()
      }

return(<Container className="Navegation">
         <Row>
                <Col xs={12}>            
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">
                   <Link to="/">
                    <img 
                    alt="neowork"
                    
                   src="http://neowork.co/assets/images/logo/logo.png"/>
                   </Link>

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">         
                        <Nav.Link 
                        as={Link2} 
                        activeClass="active"
                        to="section1"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                        >About Us</Nav.Link>
                        <Nav.Link as={Link} to="/Contacts">Teams</Nav.Link>
                        <Nav.Link as={Link} to="/Contact">Contact Us</Nav.Link>
                        <Nav.Link as={Link} to="/Search">Search</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
                </Col>   
         </Row>
     
    </Container>)

}

export default Navegation