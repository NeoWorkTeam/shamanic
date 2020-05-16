import React, { Component } from 'react'
import { Container,Row,Col} from 'react-bootstrap'
import '../components/aboutUs/style.css'


class Card extends Component{

    constructor(props){
        super(props)
        this.state = {
            image : props.imagen
        }
    }

    componentDidMount(){
      console.log('About Us: done');
    }

    render(){

        const { title, parrafo } = this.props  

        return (
            <Container className="contenedor" >
                <img className="banner01" alt="banner" src="http://neowork.co/assets/images/bg/blue2.png"/>
                <Row>
                    <Col xs={12} md={12}>
                        <h2>{title}</h2> 
                    </Col>
                </Row>
                <Row>
                <Col xs={12} md={6}  >
                <img className="imageSection" src={this.state.image}  alt="Neowork" />
                </Col>
                    <Col xs={12}  md={6}>
                        <p>
                        {parrafo}
                        </p>
                    </Col>
                </Row>
            </Container>
        )
    }

}


export default Card 