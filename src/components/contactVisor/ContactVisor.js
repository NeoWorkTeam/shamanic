import React ,{ Component } from 'react'
import { Container } from 'react-bootstrap'


class ContactVisor extends Component{

    render(){
     
      return( <Container>
        <p>{ this.props.fullname }</p>
        <p> { this.props.email }</p>
        <p>{ this.props.message }</p>
        </Container>)
    }

}


export default ContactVisor