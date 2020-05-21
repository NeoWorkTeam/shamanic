import React from 'react';
import { Container,Row,Col } from 'react-bootstrap'

import sandra from '../../img/sandra.svg'

import './cubeAbout2Style.css'

import Storage from '../storage'
const storage = Storage()


const CubeAbout2 = (props) => {

        return (<Container  className="CubeAbout2">
            <Row>
               <h2>
               {  storage.about.title } 
               </h2>
                
                <section className="shamanicBlob">
                        <p>
                        {  storage.about.text1 }<br/>
                        {  storage.about.text2 } <br/>
                        {  storage.about.text3 }
                        </p>
                </section>

                <img src={ sandra } alt='sandra' className='avatar' />
            
            </Row>
        </Container>)
}


export default CubeAbout2
