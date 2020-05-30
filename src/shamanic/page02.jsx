import React, { useEffect }  from 'react'
import CubeBanner from './components/cubeBanner/cubeBanner'
import CubeAbout2 from './components/cubeAbout2/cubeAbout2'
import CubeBonuses from './components/cubeBonuses/cubeBonuses'
import CubeIncludes from './components/cubeIncludes/cubeIncludes'
import Footer from './components/footer'
import Header from './components/header'
import { withRouter } from "react-router-dom"
import ReactGA from 'react-ga'

import './style.css'
import CubeCourses from './components/cubeCourses/cubeCourses'


function getCookie(cname) {
     var name = cname + "=";
     var decodedCookie = decodeURIComponent(document.cookie);
     var ca = decodedCookie.split(';');
     for(var i = 0; i <ca.length; i++) {
       var c = ca[i];
       while (c.charAt(0) == ' ') {
         c = c.substring(1);
       }
       if (c.indexOf(name) == 0) {
         return c.substring(name.length, c.length);
       }
     }
     return "";
   }


   

function Page02( props ) {
     
     React.useEffect(() => {
          ReactGA.initialize('UA-154561398-2');
       
     
      if(document.location.pathname==='/gabriel-intro'){

      }else{
           
          ReactGA.pageview(window.location.pathname + window.location.search)
          ReactGA.event({
               category: 'conversion',
               action: 'AW-640361169/2wqsCMW9-dEBENHFrLEC',
               label: 'conversion',
             });


        

      }

         
     
     },[]);

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