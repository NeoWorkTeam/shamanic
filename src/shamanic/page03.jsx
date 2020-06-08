import React ,{ Component } from 'react'
import CubeForm from './components2/cubeForm/cubeForm'
import CubeAbout from './components2/cubeAbout/cubeAbout'
import CubeModule from './components2/cubeModule/cubeModule'
import { Container,Row,Col } from 'react-bootstrap'

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

     React.useEffect(() => {

       
     },[props]);

       return(
        <React.Fragment >
            <div id="Page03">

               <section  id='sectionA'>
                    <CubeForm   />
               </section>


<div className="fondo001">
                <Container className="moduloA001" >

                <Row className="mobile">   
                           
                    
                           <Col xs={12} md={12}  >
    
                       
                       <PrincingCard></PrincingCard>
                                      
    
                           </Col>
    
                           </Row>


                    <Row>

                    <Col xs={12} md={2} >

            <img src={Line } alt='cuadrado' className="line noMobile" ></img>
            <img src={Rectangle} alt='rentagulo' className="rectangule noMobile" ></img>

                    </Col>

                                <Col xs={12} md={8} >
                                        <h2>
                                        El chamanismo es la práctica espiritual más antigua
                                        del mundo y la necesitamos más que nunca...

                                        </h2>
                                </Col>
                           
                    <Col xs={12} md={2} >
                      <img src={Line } alt='cuadrado' className="line2  noMobile" ></img>
                      <img src={Rectangle} alt='rentagulo' className="rectangule2 noMobile" ></img>
                    </Col>
                    </Row>
                </Container>

                <Container className="moduloA002" >

                    <Row  className="mobile">

                    <Col xs={12} md={12} >
                   <Carrusel></Carrusel>
                    </Col>
                    </Row>
                

                    <div className="noMobile">
                    <Row >
                    <Col xs={12} md={5} >
                        <h2> Fortalece tu Corazón </h2>
                        <p>
                        Recibe una ceremonia sanadora y prácticas chamánicas para calmar tu miedos, mejorar tu salud y fuerza, además de irradiar luz espiritual para el beneficio de todos. 
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

                <Container className="moduloA003" >
            
                <Row>
                            
                                <Col xs={12} md={12} >
                                        <h2>
                                        Lo que descubrirás en el curso transformador virtual de 7 partes de Sandra        
                                        </h2>
                                        <p>
                                        En este curso intensivo de transformación de 7 semanas, Sandra te guiará a través de las habilidades y competencias fundamentales cuerpo-mente-espíritu que necesitarás para fortalecer tu salud, cambiar tu mentalidad y empoderar a tu comunidad.
                                        </p>
                                </Col>
                           
                    </Row>

                </Container>      

                <Container className="moduloA004" >

                    <Row>
                    <Col xs={12} md={6} className="marco noMobile"  >
                    <img src={ module1 } alt="1" />
                    </Col>

                    <Col xs={12} md={6}  className="parrafo">
                        <h2> Módulo 1   </h2>
                        <h3> Re-tejiendo la historia de tu creación para la salud </h3>
                        <p>
                        Explora cómo los chamanes interactúan directamente con los espíritus para abordar los aspectos espirituales de la enfermedad, realizar recuperaciones de almas, información divina y mucho más. 
                        </p>
                    </Col>
                
                    <Col xs={12} md={6} className="marco mobile" >
                    <img src={ module1 } alt="1" />
                    </Col>


                    </Row>
                
                    <Row>
                  
                    <Col xs={12} md={6}  className="parrafo">
                        <h2> Módulo 2   </h2>
                        <h3> Transfiguración y viendo el mundo a través de los ojos del espíritu </h3>
                        <p>
                        Conocerás al espíritu de la tierra donde vives, para que puedas construir una relación sólida con él.
                        </p>
                    </Col>
                    <Col xs={12} md={6} className="marco" >
                    <img src={ module2 } alt="1" />
                    </Col>
                    </Row>

                    <Row>
                    <Col xs={12} md={6} className="marco noMobile" >
                    <img src={ module3 } alt="1" />
                    </Col>
                    <Col xs={12} md={6}  className="parrafo">
                        <h2> Módulo 3   </h2>
                        <h3> Invocando sueños de sanidad y cambiando tu realidad diurna</h3>
                        <p>
                        Viaje de varios pasos para identificar el espíritu que se ofrece como voluntario para trabajar contigo y discernir qué tipo de poder tienen.
                        </p>
                    </Col>
                    <Col xs={12} md={6} className="marco mobile" >
                    <img src={ module3 } alt="1" />
                    </Col>
                    
                    </Row>
                
                    <Row>
                   
                    <Col xs={12} md={6}  className="parrafo">
                        <h2> Módulo 4   </h2>
                        <h3> Sanando pensamientos tóxicos: cómo transmutar y desmembrar el miedo, la ira, el dolor y la traición.</h3>
                        <p>
                            
        Sandra compartirá cómo tus emociones se convierten en formas de energía, lo que ella llama dardos psíquicos ... y cómo terminas enviando estas emociones al colectivo sin saberlo.

                        </p>
                    </Col>
                    <Col xs={12} md={6} className="marco" >
                    <img src={ module4 } alt="1" />
                    </Col>
                    </Row>



                    <Row>
                    <Col xs={12} md={6} className="marco noMobile" >
                    <img src={ module5 } alt="1" />
                    </Col>
                    <Col xs={12} md={6}  className="parrafo">
                        <h2> Módulo 5   </h2>
                        <h3> Trabajando con la luna y los cristales: como transmitir energías sanadoras en la ceremonia </h3>
                        <p>
                        Sandra, compartirá algunas de sus más queridas herramientas y enseñanzas espirituales, incluyendo cómo trabajar con cristales sanadores.

                        </p>
                    </Col>
                    <Col xs={12} md={6} className="marco mobile" >
                    <img src={ module5 } alt="1" />
                    </Col>
                    
                    </Row>
                
                    <Row>
                
                    <Col xs={12} md={6}  className="parrafo">
                        <h2> Módulo 6   </h2>
                        <h3> Aprovechando los elementos: Fusión y construcción de conexiones. </h3>
                        <p>
                        Sandra compartirá cómo los chamanes se han comunicado desde siempre con los elementos y cómo todos podemos aprender a hacerlo si estamos dispuestos a cambiar nuestras vidas y relación con los elementos.

                        </p>
                    </Col>
                    <Col xs={12} md={6} className="marco" >
                    <img src={ module6 }  alt="1" />
                    </Col>
                    </Row>

                    <Row>
                    <Col xs={12} md={6} className="marco noMobile" >
                    <img src={ module7 }  alt="1" />
                    </Col>
                    <Col xs={12} md={6}  className="parrafo">
                        <h2> Módulo 7   </h2>
                        <h3> Viajando al futuro y de vuelta a los ancestros: Accediendo a la sabiduría para sobrevivir a la crisis actual.  </h3>
                        <p>
                                Sandra explicará las formas únicas en que los chamanes perciben las enfermedades físicas y emocionales.
                                También compartirá un método de curación simple pero poderoso para el que te sentirás completamente preparado.
                        </p>
                    </Col>
                    <Col xs={12} md={6} className="marco mobile" >
                    <img src={ module7 }  alt="1" />
                    </Col>
                    </Row>
                
                
                </Container>      
                
                <Container className="moduloA005" >
                
                    <Row>
                    <Col xs={12} md={12} >
                        <h3>  Conoce a tu Profesora  </h3>
                        <img src={ avatar } alt="1" />
                        <h2> Sandra Ingerman   </h2>
                        <p>
                        Sandra Ingerman, MA, es una autora galardonada de 12 libros, incluyendo “Recuperación del Alma: Reparando el Ser Fragmentado”, “Medicina para la Tierra”, “Caminando en la Luz” y “El Libro de Ceremonias: Sabiduría Chamánica para Invocar lo Sagrado en la vida Cotidiana”. También es la presentadora de ocho programas de audio producidos por Sounds True.
                        </p>  <p>
        Sandra, profesora de chamanismo de renombre mundial, ha enseñado durante casi 40 años. Ha impartido talleres internacionales sobre viajes chamánicos, curación y la reversión de la contaminación ambiental. 
        Sandra es conocida por reunir a la comunidad espiritual global para realizar ceremonias transformadoras poderosas, y por inspirarnos a mantenernos firmes en la unidad para que hagamos nuestro propio trabajo de activismo espiritual y social mientras mantenemos una visión de esperanza y servimos como luz en el mundo.
        </p>  <p>
        También le apasiona ayudar a las personas a reconectarse con la naturaleza. Desde la década de 1980, miles de personas se han curado de traumas pasados ​​y presentes a través del clásico método de curación chamánica intercultural que Sandra enseña, llamado “recuperación del alma”.
        Sandra, terapeuta matrimonial y familiar con licencia y consejera profesional de salud mental, también es una experta certificada en estrés traumático. La revista Watkins Body Mind Spirit la honró al incluirla en sus 100 personas más influyentes espiritualmente de 2020. También fue elegida como una de las 10 líderes espirituales principales de 2013 por la revista Spirituality and Health, y recibió el Premio a la Paz 2007 de la Fundación Global para la Medicina Integrativa.Sandra se unió en sociedad con Renee Baribeau para crear un podcast semanal de 30 minutos llamado The Shamans Cave.


                        </p>
                
                      

                    </Col>
                
                    </Row>


                </Container>

                <Container className="bannerBottom">
                       <Row>   
                           
                    
                       <Col xs={12} md={12}  >

                   
                       <PrincingCard />


                          <Footer pages='3'   />        

                       </Col>

               

                       </Row>

                      

                       </Container>
                
                

            </div>
        </React.Fragment>
       )
}

export default Page03