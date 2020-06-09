import React ,{ Component } from 'react'
import CubeForm from './components/cubeForm/cubeForm'
import CubeAbout from './components/cubeAbout/cubeAbout'
import CubeModule from './components/cubeModule/cubeModule'
import Footer from './components/footer'
import Header from './components/header'
import './style.css'
import Storage from './components/storage'
import { GoogleAnalytics,GoogleAnalyticsEvent }  from './analytics'
import { hotjar } from 'react-hotjar';

const storage = Storage()

function Page01 ( props ) {

     GoogleAnalytics('page01')
     
   
     hotjar.initialize(1840193,6)


     GoogleAnalyticsEvent('Register Contact')

     React.useEffect(() => {

       
     },[props]);

       return(

        <React.Fragment >
          <div id="Page01">

               <section  style={ {  background:'#FDF7EB', padding:'0px'  } } id='sectionA'>
                    <Header />
                    <CubeForm   />
               </section>

               <section  style={ { paddingTop:'100px', paddingBottom:'40px'  } } id='sectionB'>
                         { storage.features.map((item,index) => 
                              <CubeModule {...item } key={ index } />  )
                         }  
               </section>
     
               <section  style={ {  background:'#FFF',  paddingTop:'100px', paddingBottom:'0px'  } } id='sectionC'>
                    <CubeAbout />
                    <Footer   />
               </section>
                       
          
     </div>
     
        </React.Fragment>
       )  
}

export default Page01