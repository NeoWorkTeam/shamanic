import React  from 'react'
import CubeBanner from './components/cubeBanner/cubeBanner'
import CubeAbout2 from './components/cubeAbout2/cubeAbout2'
import CubeBonuses from './components/cubeBonuses/cubeBonuses'
import CubeIncludes from './components/cubeIncludes/cubeIncludes'
import Footer from './components/footer'
import Header from './components/header'
import { withRouter } from "react-router-dom"
import { GoogleAnalytics }  from './analytics'
import { hotjar } from 'react-hotjar';

import './style.css'
import CubeCourses from './components/cubeCourses/cubeCourses'


function Page02( props ) {

     GoogleAnalytics('page02')

     hotjar.initialize('1840193',6)

     return ( 
      <React.Fragment>

     <div style={ {  overflow:'hidden' } } id="page02">

        <section className="Header">
             <Header />
        </section>
       
        <section  style={ {  background:'#FDF7EB', padding:'10px'  } } id='sectionD'>
             <CubeBanner />
        </section>

        <section id='sectionB'>
                 <CubeAbout2 />
        </section>

        <section  style={ {  background:'#fff', padding:'50px 0px'  } } id='sectionA'>
             <div className='wrapper'>
             <CubeCourses />
             </div>
        </section>

        <section  >
             <CubeBonuses />
        </section>
        
        <section className="section06">
             <CubeIncludes />
        </section>
       

     

        <section className="Footer">
             <Footer pages='2'   />
        </section>
        </div>
        </React.Fragment> 

     )
        
}

export default withRouter(Page02)