import React ,{ Component } from 'react'
import Card from '../components/Card'
import Services from '../components/services/Services'
import Navegation from '../components/navegation/Navegation'
import RecentProjects from '../components/recentProjects/RecentProjects'
import About from '../components/about/About'
import Banner from '../components/banner/Banner'


import { Container } from 'react-bootstrap'

import '../pages/style.css'


class Home extends Component {

  render(){
       return(

        <React.Fragment>
        <Container className="contenedor">

        <Navegation />
        </Container>
        
        <Banner></Banner>

        <Container className="contenedor">
          
            <Card
            imagen   = "imagen/neowork.png"
            title    = "Propel Your Project With Custom Animation"
            parrafo  = "NeoWork is an animation and post-production house that fully embraces the new form of work. Each team member plays a multifunctional role and shifts between focusing on various projects.  For team-wide objectives, each member fulfills an integral role in a project plan that culminates in a completed product, far greater than the sum of its individual parts."
            />

            <Services title='Our Services'></Services>



            <RecentProjects></RecentProjects>

            <About></About>


        </Container>
        </React.Fragment>
       )  
  }
        
}

export default Home