import React from 'react';
import { Container,Row,Col } from 'react-bootstrap'

import sandra from '../../img/sandra.svg'
import fondo from '../../img/AboutBackground.svg'


import './cubeAbout2Style.css'

import Storage from '../storage'
const storage = Storage()


const CubeAbout2 = (props) => {

        return (<Container  className="CubeAbout2">
            <Row>

            <Col xs={12} md={12} >
               <h2>
               {  storage.about.title } 
               </h2>
            </Col>
        
            <Col xs={12} md={8} >
             
             <img className='fondo' src={fondo} alt={ storage.about.title }   />

                <p>
                {  storage.about.text1 }<br/>
                {  storage.about.text2 } <br/>
                {  storage.about.text3 }
                </p>
                    
            </Col>
           
            <Col xs={12} md={4} >

                <img src={ sandra } alt='sandra' className='avatar' />
            
            </Col>
            </Row>
        </Container>)
}


export default CubeAbout2