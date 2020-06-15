import React ,{ Component } from 'react'
import CubeForm from './components2/cubeForm/cubeForm'
import CubeFormVideo from './components2/cubeFormVideo/cubeFormVideo'
import { Container,Row,Col } from 'react-bootstrap'
import { hotjar } from 'react-hotjar';

import './style2.css'
import Storage from './components/storage'
import { GoogleAnalytics,GoogleAnalyticsEvent }  from './analytics'
import Footer from './components/footer'
import Carrusel from './components2/carrusel'

import module1 from './img/lp2/modulo1.png'
import module2 from './img/lp2/modulo2.png'
import module3 from './img/lp2/modulo3.png'
import module4 from './img/lp2/modulo4.png'
import module5 from './img/lp2/modulo5.png'
import module6 from './img/lp2/modulo6.png'
import module7 from './img/lp2/modulo7.png'

import Line from './img/lp2/Line01.png'
import Rectangle from './img/lp2/Rectangle15.png'

import circle1 from './img/lp2/circle1.png'
import circle2 from './img/lp2/circle2.png'
import rectangule1 from './img/lp2/fondo4.png'

import PrincingCard from './components2/pricingCard'



import avatar from './img/lp2/sandra.png'
import pin from './img/lp2/pin.svg'
import bannerBottom from './img/lp2/bottom.svg'


const storage = Storage()

function Page03 ( props ) {

     GoogleAnalytics('page01')
     
     GoogleAnalyticsEvent('Register Contact')

     hotjar.initialize('1840193',6)


     React.useEffect(() => {

       
     },[props]);

       return(
        <React.Fragment >
            <div id="Page03">

               <section  id='sectionA'>
                    <CubeFormVideo   />
                 
               </section>


<div className="fondo001">
       
                <Container className="moduloA002" >

              

                    <div className="">
                    <Row >
                    <Col xs={12} md={5} >
                        <h2> Fortalece tu Corazón </h2>
                        <p>
                        Recibe una ceremonia sanadora y prácticas chamánicas para calmar tus miedos, mejorar tu salud y fuerza, además de irradiar luz espiritual para el beneficio de todos. 
                        </p>        
                    </Col>
                    <Col xs={12} md={2} className="noMobile" >
                        <img src={pin} className="icon" alt="avatar" />
                    </Col>
                    <Col xs={12} md={5} >
                        <h2> Consolida tu Comunidad 
                        </h2>
                        <p>
                        Conoce y accede al mundo de las prácticas chamánicas las cuales te guiarán para que empieces a ver el mundo de una mejor manera. 
                        </p>
                    </Col>
                    </Row>


                    <Row>
                    <Col xs={12} md={5} >
                        <h2> Cambia tu Mentalidad
                        </h2>
                        <p>
                        Explora las muchas razones por las que las prácticas chamánicas pueden darte sabiduría esencial para navegar y afrontar distintas crisis. 
                        </p>
                    </Col>
                    <Col xs={12} md={2} ></Col>
                    <Col xs={12} md={5} >
                        <h2> Obtén Experiencias Sanadoras </h2>
                        <p>
                        Obtén herramientas útiles para proyectar luz hacia los demás y atraer energía positiva a tu vida y a la de los demás.  
                        </p>
                    </Col>
                    </Row>
                </div>  
                </Container>
 </div>               

           
               <section  id='sectionA' style={{ paddingBottom:'100px !important'}}>
                    <CubeForm   /><br></br><br></br><br></br><br></br><br></br>
                    <Footer pages='3'   />  
               </section>

             

    
            

            </div>
        </React.Fragment>
       )
}

export default Page03