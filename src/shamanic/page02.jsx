import React  from 'react'
import SectionBanner from './components/sectionBanner'
import SectionAbout2 from './components/sectionAbout2'
import SectionGraduates from './components/sectionGraduates'
import SectionProgramBonuses from './components/sectionBonuses'
import SectionWhatsIncluded from './components/sectionWhatsIncluded'
import Footer from './components/footer'
import Header from './components/header'
import { withRouter } from "react-router-dom"

import './style.css'

function Page01( props ) {

  

     const get =  props.location.pathname.split('/')
     const sessionID = get[2] 

     if(sessionStorage.getItem('session')==null){
          props.history.push('/')
     }




     return ( 


      <React.Fragment>

        <section className="Header">
             <Header />
        </section>
       
        <section className="section01">
             <SectionBanner />
        </section>

    
        <section className="section03">
             <SectionAbout2 />
        </section>


        <section className="section04">
             <SectionGraduates />
        </section>

      
        <section className="section05">
             <SectionProgramBonuses />
        </section>
        
        <section className="section06">
             <SectionWhatsIncluded />
        </section>
       
        <section className="Footer">
             <Footer />
        </section>

        </React.Fragment> 
         
     
     )
        
}

export default withRouter(Page01)