import React  from 'react'
import CubeBanner from './components/cubeBanner/cubeBanner'
import Footer from './components/footer'
import Header from './components/header'
import { withRouter } from "react-router-dom"
import { GoogleAnalytics }  from './analytics'
import { hotjar } from 'react-hotjar';

import './style.css'
import { Container,Row,Col } from 'react-bootstrap'

import bonus1 from './img/lp2/bonus1.png'
import bonus2 from './img/lp2/bonus2.png'

import icon1 from './img/lp2/icon1.svg'
import icon2 from './img/lp2/icon2.svg'
import icon3 from './img/lp2/icon3.svg'
import icon4 from './img/lp2/icon4.svg'
import parrafoBottom from './img/lp2/parrafoBottom.png'

import Line from './img/lp2/Line01.png'
import Rectangle2 from './img/lp2/Rectangle23.png'
import horizontal from './img/horizontal.svg'

import PrincingCard from './components2/pricingCard'
import Storage from './components/storage'

const storage = Storage()




function Page02( props ) {

     GoogleAnalytics('page02')
     hotjar.initialize('1840193',6)
     

     return ( 
      <React.Fragment>

     <div style={ {  overflow:'hidden' } } id="Page04">

        <section className="Header" style={ {  background:'#f7ecfe'   } }>
             <Header />
        </section>
       
        <section  style={ {  background:'#f7ecfe', padding:'10px'  } } id='sectionD'>
             <CubeBanner />
        </section>

        <Container className="moduloAB001">

             <h2>
             Une las manos (enérgicamente) con tu comunidad chamánica mientras 
              dominas las prácticas para protegerte de las enfermedades,
              nutrir tu espíritu e inundar el mundo con amor y luz sanadores...
             </h2>

               <p>
               ¿Estos tiempos sin precedentes te están suscitando sentimientos de ansiedad, incertidumbre, preocupación profunda, o incluso emociones que no puedes nombrar?
               </p>
               <img className="parrafoBottom" src={parrafoBottom} alt="parrafo"></img>
               <p>
               No estás solo ... De las cosas más difíciles de estos tiempos turbulentos de enfermedad, aislamiento social y confusión es que nos tomaron por sorpresa a muchos de nosotros ...Sin embargo, según la perspectiva chamánica, el virus al que todos nos enfrentamos y el caos que lo acompaña no surgió de la nada. Eso está lejos de la realidad. Ya estábamos lidiando, por ejemplo, con la increíble pena de perder tantos seres en los incendios forestales de Australia. Nuestro planeta contaminado. Profunda avaricia. La inestabilidad política.
               </p>
               <img className="parrafoBottom" src={parrafoBottom} alt="parrafo"></img>
               <p>Y las formas de pensamiento negativas inundan el colectivo ... Mirando nuestro mundo a través de un lente chamánico, en realidad no es ninguna sorpresa que este nivel de dolor colectivo eventualmente se convierta en un virus. Entonces, ¿qué puede hacer un buscador chamánico como tú ahora, a diario, en estos tiempos de incertidumbre, especialmente si te sientes impotente?
               </p>
               <img className="parrafoBottom" src={parrafoBottom} alt="parrafo"></img>
               <p>
               Según la venerada maestra chamánica Sandra Ingerman, puedes descansar con la seguridad de que tus antepasados y descendientes ya te han dejado pistas ... sabiduría poderosa y herramientas espirituales efectivas para ayudarte a navegar estos días históricos.
               </p>
               <img className="parrafoBottom" src={parrafoBottom} alt="parrafo"></img>
               <p>
               De hecho, durante decenas de miles de años, las antiguas tradiciones nos han estado enseñando a todos cómo superar este momento exacto. Su sabiduría chamánica curativa nos llega a través de cantos, canciones, historias, palabras sabias, prácticas indígenas y más.
               </p>
        

        </Container>

        <Container className="moduloAB002">

          <img src={horizontal} alt="Sandra"  className="horizontal1" ></img>
          <img src={horizontal} alt="Sandra"  className="horizontal2" ></img>

          <h2>
          Lo que descubrirás en este curso 
          </h2>

          <ul>
               <li> 
               Cómo nació este virus a nivel espiritual, y las prácticas espirituales que necesitamos para transmutar la negatividad.
               </li>
               <li> 
               Las muchas formas en las que estos tiempos difíciles te fortalecen, te proporcionan una perspectiva diferente, incluso a través de tus miedos.
               </li>
               <li> 
               Cómo este trabajo espiritual calma el sistema nervioso
               </li>
               <li> 
               Las formas en que el chamanismo nos capacita para ser pilares de luz y fuerza, capaces de resistir tormentas emocionales y crear protección para nosotros y nuestros seres queridos.
               </li>
               <li> 
               Los círculos y las prácticas semanales los cuáles te enamorarán mientras tú y tu comunidad chamánica se irradian luz curativa universal, y fortalecen la capacidad de tu alma para superar estos desafíos.
               </li>
               <li> 
               La creencia chamánica de que nuestras almas toman la decisión sobre los próximos pasos de nuestro viaje, aunque tu ego no lo haga.
               </li>
               <li> 
               Cómo estos tiempos difíciles son una iniciación para ti y para todas las personas.
               </li>
               <li> 
               Las muchas razones por las que los viajes chamánicos, pueden darnos la sabiduría esencial para navegar nuestras crisis actuales.
               </li>
          </ul>

     
     <img src={Line} className="line1 noMobile" alt="line" ></img>
     <img src={Rectangle2} alt="line " className="noMobile"></img>
     <img src={Line} className="line2 noMobile" alt="line"></img>

          </Container>

        <Container className="moduloAB003">
               
               <h2> Bonus del programa </h2>
               <h3> (Valorado en $100.00) </h3>

               <Row>
                    <Col xs={12} md={6} >
                  <p>
                  Introducción a los Viajes Chamánicos <br></br>
                    (Si compras dentro de las 24 horas)
                    </p> 

                    <img src={bonus1} alt="title"></img>

                     </Col>

                     <Col xs={12} md={6} >
                   
                     <p>
                       
                    Extractos del Libro <br></br> de Ceremonia
                    </p>

                     <img src={bonus2} alt="title"></img>

                     </Col>                    
               </Row>          
               
          </Container>

        <Container className="moduloAB004">
          
                 <Row>
                    <Col xs={12} md={1} > 
                          <img className="icon1" style={{ width:30 }} src={icon1} alt="title"></img>
                    </Col>
                  
                    <Col xs={12} md={11} > 
                    <h2> 
                    Siete grabaciones de video de sesiones de clase   
                    </h2>
                    </Col>          
                 
                    <Col xs={12} md={12} > 
                    <p>
                    Después de cada clase, el video estará disponible para que lo descargues o lo transmitas en formato de alta calidad. Nunca tendrás que preocuparte por perder una sesión, y puedes mirarla en cualquier momento y en cualquier lugar, en cualquier dispositivo conectado y a tu conveniencia.
                   </p> 
                    </Col>
             
               </Row>       


                 <Row>
                    <Col xs={12} md={1} > 
                          <img className="icon2"  style={{ width:30 }} src={icon2} alt="title"></img>
                    </Col>
                    <Col xs={12} md={11} > 
                         <h2>
                           Siete grabaciones de audio de sesiones de clase
                         </h2>
                    </Col>         

                    <Col xs={12} md={12} > 
                         <p>
                           Después de cada clase, el audio estará disponible para que lo descargues en formato MP3 de alta calidad. Nunca tendrás que preocuparte por perder una sesión, y puedes escucharla en cualquier momento y en cualquier lugar, en cualquier dispositivo conectado y a tu conveniencia.
                         </p>
                    </Col>

               </Row>       

               <Row>
                    <Col xs={12} md={1} > 
                          <img className="icon3" style={{ width:30 }} src={icon3} alt="title"></img>
                    </Col>
                    <Col xs={12} md={11} > 
                         <h2>
                         Siete transcripciones en PDF de las sesiones de clase
                         </h2>  
                    </Col>         

                    <Col xs={12} md={12} > 
                    <p>
                    Después de cada clase, el audio estará disponible para que lo descargues en formato MP3 de alta calidad. Nunca tendrás que preocuparte por perder una sesión, y puedes escuchar en cualquier momento y en cualquier lugar, en cualquier dispositivo conectado y a tu conveniencia.
                    </p>
                    </Col>

               </Row>  

               <Row>
                    <Col xs={12} md={1} > 
                          <img  className="icon4"  style={{ width:30 }} src={icon4} alt="title"></img>
                    </Col>
                    <Col xs={12} md={11} > 
                    <h2>
                    Comunidad en línea con Sandra y sus asistentes
                    </h2>
                    </Col>         

                    <Col xs={12} md={12} > 
                    <p>
                    Nuestra exclusiva comunidad en línea de Facebook es el lugar perfecto para continuar tu proceso de descubrimiento después de cada clase. Aquí, puedes continuar la discusión sobre los materiales del curso, hacer preguntas a Sandra y sus asistentes e interactuar con tus compañeros para llevar tu exploración a un nivel aún más profundo. Descubrirás que es una de las comunidades de Facebook más comprensivas, cariñosas y conocedoras del planeta. Como descubrirás, Sandra responde a cada publicación.
                    </p>
                    </Col>

               </Row>   
               <Row>
                         <img src={Line} className="line1 noMobile" alt="line" ></img>
                         <img src={Rectangle2} alt="line " className="noMobile"></img>
                         <img src={Line} className="line2 noMobile" alt="line"></img>
               
                         <Col xs={12} md={12} > 
                              <a href={ storage.url_start_program }  title="Sandra" className="ctaVersion11" > { storage.version11.cta02 } </a>
                         </Col>    

                         <Container className="moduloAB002" >
        

        <p> <br></br><br></br>
        Desde su fundación en 2010, la misión de <b>The Shift Network</b> ha sido siempre despertar  a cada persona a su potencial pleno. <br></br><br></br>
<b>The Shift Network</b> es la marca #1 en Estados Unidos en Transformación Personal, poniendo a tu alcance la sabiduría de maestros reconocidos
a nivel mundial, con cursos virtuales dinámicos y de fácil acceso.<br></br> <br></br> Shift ofrece la sabiduría y el conocimiento dado por grandes maestros 
cómo Deepak Chopra, Marianne Williamson, Sandra Ingerman, Don Miguel Ruiz y Gregg Braden entre muchos otros.<br></br> <br></br>
El curso inaugural de <b>Sandra Ingerman</b>, titulado <b>Prácticas chamánicas de inmunidad espiritual</b>, ha sido traducido al español para el público latinoamericano
y ya ha transformado las vidas de más de <b>2000 estudiantes</b> en este 2020 con sus enseñanzas sobre protección espiritual, tan apropiadas para estos tiempos difíciles.
        <br></br> <br></br>
        </p>    
</Container>
              </Row>    
          </Container>

        <Container className="moduloAB005">

<div className="wrapper">

          <h2>
          Si está listo para dar el siguiente paso en tu propia evolución, únete a nuestra comunidad para la sanación personal y colectiva.
          </h2>

          <PrincingCard />

          </div> 
          <Footer pages='1'   />
           </Container>    
          
     
        </div>
        </React.Fragment> 

     )
        
}

export default withRouter(Page02)