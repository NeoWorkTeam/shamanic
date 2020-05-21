import React  from 'react'
import CubeBanner from './components/cubeBanner/cubeBanner'
import CubeAbout2 from './components/cubeAbout2/cubeAbout2'
import CubeBonuses from './components/cubeBonuses/cubeBonuses'
import CubeIncludes from './components/cubeIncludes/cubeIncludes'
import Footer from './components/footer'
import Header from './components/header'
import { withRouter } from "react-router-dom"
import Storage from './components/storage'

import './style.css'
import CubeCourses from './components/cubeCourses/cubeCourses'

const storage = Storage()


function Page01( props ) {

     const get =  props.location.pathname.split('/')
     const sessionID = get[2] 

     if(sessionStorage.getItem('session')==null){
          props.history.push('/')
     }


     return ( 

      <React.Fragment>
     <div id="page02">
        <section className="Header">
             <Header />
        </section>
       
        <section  style={ {  background:'#FDF7EB', padding:'50px'  } } id='sectionA'>
             <CubeBanner />
        </section>

        <section  style={ {  background:'#fff', padding:'50px', height:'1200px'  } } id='sectionB'>
             <CubeAbout2 />
        </section>

        <section  style={ {  background:'#fff', padding:'50px 0px'  } } id='sectionA'>
             <div className='wrapper'>
             <CubeCourses />
             </div>
        </section>

        <section  style={ {  background:'#fff', padding:'50px'  } } id='sectionA'>
             <CubeBonuses />
        </section>
        
        <section className="section06">
             <CubeIncludes />
        </section>
       
        <section className="Footer">
             <Footer />
        </section>
        </div>
        </React.Fragment> 

     )
        
}

export default withRouter(Page01)