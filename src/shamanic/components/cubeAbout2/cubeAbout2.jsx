import React from 'react';
import { Container,Row,Col } from 'react-bootstrap'

import sandra from '../../img/sandra.svg'
import fondo from '../../img/AboutBackground.svg'


import './cubeAbout2Style.css'

import Storage from '../storage'
const storage = Storage()


const CubeAbout2 = (props) => {

        return (<Container  className="CubeAbout2 ">
       

               <h2>
               {  storage.about.title } 
               </h2>
          
               <section className="shamanicBlob">
                     <div className="shamanicText">
                                <p>
                                {  storage.about.text1 }
                                <br/><br/>
                                {  storage.about.text2 }
                                <br/><br/>
                                {  storage.about.text3 }
                                </p>
                          </div>        
                </section>


                <img src={ sandra } alt='sandra' className='avatar' />
            
            
   
        </Container>)
}


export default CubeAbout2