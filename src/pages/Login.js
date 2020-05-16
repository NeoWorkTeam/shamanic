import React ,{ Component } from 'react'
import Services from '../components/services/Services'
import Navegation from '../components/navegation/Navegation'
import { Container } from 'react-bootstrap'

import '../pages/style.css'


class Login extends Component {

  render(){
       return(
        <Container className="contenedor">
            <Services title='Our Services'></Services>
        </Container>
       )  
  }
        
}


export default Login