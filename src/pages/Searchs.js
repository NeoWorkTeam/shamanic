import React ,{ Component } from 'react'
import Navegation from '../components/navegation/Navegation'
import Search from '../components/search/Search'


import { Container } from 'react-bootstrap'

import '../pages/style.css'


class Home extends Component {

  render(){
       return(

        <React.Fragment>
        <Container className="contenedor">
         <Navegation />
         <Search />
        </Container>
        </React.Fragment>
       )  
  }
        
}

export default Home