import React  from 'react'
import loadable from '@loadable/component'
import { Container,Row,Col } from 'react-bootstrap'
//import { hotjar } from 'react-hotjar';
//import { GoogleAnalytics,GoogleAnalyticsEvent }  from './analytics'
import Footer from './components/footer'
import video from './img/banner.mp4'
import Rectangle from './img/lp2/Rectangle15.png'
import pin from './img/lp2/pin.svg'
import './style2.css'


const CubeForm = loadable(() => import('./components2/cubeForm/cubeForm'))
const CubeFormVideo = loadable(() => import('./components2/cubeFormVideo/cubeFormVideo'))


function Page03 ( props ) {

    // GoogleAnalytics('Oferta 12')
     
  //   GoogleAnalyticsEvent('Register Contact Oferta12')

//     hotjar.initialize('1840193',6)


     React.useEffect(() => {

       
     },[props]);


       return(
        <React.Fragment >

            <video autoPlay="autoplay" loop="loop" muted style={{ position:'relative', width: '100%'}}  className="mobile" >
            <source src={video} type="video/mp4" />
            </video>

            <div id="Page03" className="oferta12" style={{ background:'#f6fbfe !important' }} >   
        
                <div className="banner" style={{ background:'#f6fbfe !important' }}>
                    <CubeFormVideo   />
                </div>

                <div className="fondo001">
                        <Container className="moduloA002"  >
                                <Row >
                                        <Col xs={12} md={2} >

                                        <img src={Rectangle} alt='rentagulo' className="rectangule noMobile" ></img>

                                        </Col>

                                                    <Col xs={12} md={8} >
                                                            <h2 className="frase">
                                                            El chamanismo es la práctica espiritual más antigua
                                                            del mundo y la necesitamos más que nunca...

                                                            </h2>
                                                    </Col>
                                            
                                        <Col xs={12} md={2} >
                                        <img src={Rectangle} alt='rentagulo' className="rectangule2 noMobile" ></img>
                                        </Col>
                                </Row>
                        
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