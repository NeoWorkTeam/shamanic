import React  from 'react'
import Footer from './components/footer'
import Header from './components/header'
import { withRouter } from "react-router-dom"
import { GoogleAnalytics }  from './analytics'
import { hotjar } from 'react-hotjar';
import { scroller, Element} from "react-scroll";
import PrincingCard from './components2/pricingCard'
import ReactPlayer from "react-player"
import './style.css'
import { Container,Row,Col } from 'react-bootstrap'

import bonus1 from './img/lp2/bonus1.png'
import bonus2 from './img/lp2/bonus2.png'
import icon1 from './img/lp2/icon1.svg'
import icon2 from './img/lp2/icon2.svg'
import icon3 from './img/lp2/icon3.svg'
import icon4 from './img/lp2/icon4.svg'
import parrafoBottom from './img/lp2/parrafoBottom.png'
import module1 from './img/lp2/modulo1.png'
import module2 from './img/lp2/modulo2.png'
import module3 from './img/lp2/modulo3.png'
import module4 from './img/lp2/modulo4.png'
import module5 from './img/lp2/modulo5.png'
import module6 from './img/lp2/modulo6.png'
import module7 from './img/lp2/modulo7.png'
import stars from './img/lp2/stars.png'
import Shopping from './img/Shopping-Cart.png'
import Line from './img/lp2/Line01.png'
import Rectangle2 from './img/lp2/Rectangle23.png'
import horizontal from './img/horizontal.svg'
import avatar from './img/lp2/sandra.png'


function Page02( props ) {

     GoogleAnalytics('page02')
     hotjar.initialize('1840193',6)
     
     const [player,setPlayer]      = React.useState('')
     const [loader,setLoader]      = React.useState(false)
     const [fixvideo,setFixvideo]  = React.useState(false)
     const [timeVideo,setTimevideo] = React.useState(0)
     const [inicio,setInicio] = React.useState(true)

     const myRef = play => {
          setPlayer(play)
     }

   
     function handlePlay(e){
             setInterval(function(){ load(player.getCurrentTime()) }, 1000)
             setInterval(function(){ loadScroll() }, 1000)
     }


     /* Calcula caea 3sEgundos el tiempo del Video */
     function load(timeVideo){
          setTimevideo(timeVideo)
          if(inicio){
               
          }
     }


     function loadScroll(){
          if(window.pageYOffset>600){
             setFixvideo(true)           
          }else{
             setFixvideo(false)           
          }
     }

     function handleProgress(e){
         //console.log(e.target) 
     }

     React.useEffect(() => {
          
          if((timeVideo>4765)&&(timeVideo<4775)){
          
               scroller.scrollTo('scroll-to-element', {
                    duration: 300,
                    delay: 0
                                 })
          
               setInicio(false)
               setLoader(true) 
          }

          if((timeVideo>4765)){
               setLoader(true) 
          }

          
     },[timeVideo]);

     return ( 
      <React.Fragment>

     <div style={ {  overflow:'hidden' } } id="Page04" className="intro12">

        <section className="Header" style={ {  background:'#f7ecfe'   } }>
             <Header />
        </section>

<div style={{ background:'rgb(247, 236, 254)' }}>
        <section  style={ {  background:'#f7ecfe', padding:'10px', maxWidth:'1200px', margin:'auto'  } } id='sectionD'>
               <div className={`player-wrapper ${fixvideo ? "fixVideo" : ""}`} > 
                         <ReactPlayer  
                         url="https://vimeo.com/421621071/0a61d44f59"
                         controls={true}
                         onBuffer={() => console.log('onBuffer')}
                         onProgress={ e => handleProgress(e)}
                         ref={myRef}
                         onPlay={handlePlay}
                         className="videogame"
                         width="90%"
                         height="90%"
                         />
               </div> 

        </section>
</div>

{ loader &&   <div >

        <Container className="moduloAB001 fixmobil " >

             <h2 style={{ paddingTop:'300px !important'}}>
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


        <Element name="scroll-to-element" className="element" ></Element>
               <Container className="moduloAB002" id="scroll-container">
                         <img src={horizontal} alt="Sandra"  className="horizontal1" ></img>
                         <img src={horizontal} alt="Sandra"  className="horizontal2" ></img>
                         <h2 style={{ color:'#000', maxWidth:'800px', margin:'auto', lineHeight:"2rem" }}>
                         Lo que descubrirás en el curso transformador virtual de 7 partes de Sandra
                         </h2>
                         <p>
                         En este curso intensivo de transformación de 7 semanas, Sandra te guiará a través de las habilidades y competencias fundamentales cuerpo-mente-espíritu que necesitarás para fortalecer tu salud, cambiar tu mentalidad y empoderar a tu comunidad.
                         <br></br> <br></br>
                         </p>    
               </Container>
        
          
          <Container className="moduloA004" >

<Row>

<Col xs={12} md={12}  className="parrafo header">
    <h2> Módulo 1   </h2>
    <h3> Re-tejiendo la historia de tu creación para la salud </h3>
</Col>
<Col xs={12} md={12} className="marco "  >
<img src={ module1 } alt="1" />
</Col>
<Col xs={12} md={12}  className="parrafo">
    <p><br></br>
    Debido a que no podemos amarnos a nosotros mismos, nos estamos atacando a nosotros mismos, a nuestro sistema inmunológico y a nuestro mundo, todo sin siquiera darnos cuenta. <br></br>
La historia de la creación siempre ha sido esencial para todas las culturas chamánicas. Nos enseña cómo el creador cura la enfermedad y devuelve la salud al cuerpo. <br></br>
En esta semana de apertura, Sandra te guiará para conocer a tu creador y aprender sobre tu propia historia de creación ... para que tu cuerpo pueda disolver la enfermedad mientras te liberas para absorber el amor de nuestro creador.
Como descubrirás, tienes el poder de volver a tejer tu energía para lograr una salud perfecta, ya sea aprendiendo tu historia de creación o utilizando el nombre del creador como mantra. <br></br>
En este módulo, descubrirás: <br></br>
La tradición maya de disipar enfermedades cantando los nombres de Dios y cantando la historia de tu creación. <br></br>
Cuánto amor entró en tu creación, y cómo ese amor todavía te está ayudando a mantenerte saludable en todos los niveles
Luz divina y unidad a través del aprendizaje sobre tu historia de creación <br></br>
Cómo la historia de la creación le dio a las personas en las culturas chamánicas una hoja de ruta para vivir una buena vida, y lo que significa para TU vida hoy <br></br>
Cómo establecer un altar sagrado para colocar tus oraciones para ti mismo, tus seres queridos y el planeta. Sandra te guiará para dejar materiales en el altar y realizar ceremonias para liberar tus miedos y reclamar la bondad de la vida.

    </p>
</Col>

</Row>





<Row>

<Col xs={12} md={12}  className="parrafo header">
<h2> Módulo 2   </h2>
    <h3> Transfiguración y viendo el mundo a través de los ojos del espíritu </h3>
  
</Col>
<Col xs={12} md={12} className="marco "  >
<img src={ module2 } alt="1" />
</Col>
<Col xs={12} md={12}  className="parrafo">
    <p><br></br>
    Todo lo que está vivo está hecho con luz, y la luz cura ...
Y cuando creas un campo de energía luminosa, nada negativo puede entrar en ese campo sin ser transmutado de inmediato.<br></br>
En esta segunda sesión, Sandra compartirá un ejercicio central que usará en cada clase futura, así como los poderes curativos de las prácticas de luz que puedes usar todos los días.<br></br>
A medida que te pongas en contacto con tu propia luz espiritual, dejarás de lado el ego, la mente y el cuerpo, y experimentarás cuán fuerte y envolvente es tu propia luz espiritual ... y por qué es tu mayor forma de inmunidad espiritual .<br></br>
Sandra también compartirá cómo la tragedia sigue siendo parte de su vida, sin importar cuántas prácticas haga, y sin embargo, estas prácticas de transformación han impactado poderosamente su vida, enseñándole cómo encontrar la curación en las sombras, algo que podrá aplicar a tu vida también.<br></br>
En este módulo, aprenderás a infundir cada parte de tu ser con luz interior mientras exploras:<br></br>
¿Por qué las prácticas de luz nunca son una cura milagrosa para todas las personas y enfermedades al mismo tiempo?<br></br>
Cómo este trabajo espiritual te asegura que estás siendo amando, e incluso en estos días de distanciamiento social, nunca estás solo
Cómo mirar a las personas y al mundo a través de los ojos del espíritu: cambiando su perspectiva y viendo la luz y la fuerza en aquellos que percibimos que sufren
Cómo enseñar a los niños a hacer este trabajo, ya que los protegerá y les dará una herramienta valiosa para mantener el equilibrio  en sus sistemas nerviosos
Una ceremonia guiada con música para experimentar la curación con luz espiritual como practicante, y absorber este brillo y resplandor para tu propia salud personal Y para el colectivo.

    </p>
</Col>

</Row>




<Row>

<Col xs={12} md={12}  className="parrafo header">
<h2> Módulo 3   </h2>
    <h3> Invocando sueños de sanidad y cambiando tu realidad diurna</h3>
</Col>
<Col xs={12} md={12} className="marco noMobile"  >
<img src={ module3 } alt="1" />
</Col>
<Col xs={12} md={12}  className="parrafo">
    <p><br></br>
    ¿Sabías que en el chamanismo, cuando experimentas un momento de enfermedad, estrés, pensamientos caóticos, ansiedad y más ... puedes pedir sanación en tus sueños?<br></br>
Es un recurso de curación que a menudo se pasa por alto y al que puedes acceder instantáneamente, y esta semana, Sandra te mostrará cómo.<br></br>
Hace años, Sandra se curó de una enfermedad con la que cada especialista dijo que viviría el resto de su vida. Rezaba todas las noches para que la sanación llegara a ella en un sueño, y después de muchas noches, sus oraciones fueron respondidas ... se curó y su enfermedad nunca volvió.<br></br>
Esta semana, Sandra compartirá cómo pedir una curación en un sueño propio y cómo la persistencia es la clave para recibir la curación.<br></br>
En el camino, también recibirás la sabiduría y la guía necesaria para hacer realidad tus sueños.<br></br>
En este módulo, descubrirá cómo:<br></br>
Cómo ser extremadamente persistente al pedir un sueño curativo
El mundo entero es en realidad una creación de nuestros sueños.<br></br>
En tus sueños, el maestro o la amante te muestran cómo cambiar tus sueños y cambiar elementos de nuestro mundo, personal y colectivamente ... incluso cuando nuestro mundo se siente fuera de balance
Tus sueños están creando los eventos que ocurren en tu vida a medida que nuestros sueños esculpen nuestras vidas.<br></br>
Puedes discernir qué sueños te dan una premonición del futuro y cómo interpretarlos con precisión.<br></br>
    </p>
</Col>

</Row>






<Row>

<Col xs={12} md={12}  className="parrafo header">
     <h2> Módulo 4   </h2>
     <h3>
     Sanando pensamientos tóxicos: cómo transmutar y desmembrar el miedo, la ira, el dolor y la traición.
     </h3>
</Col>
<Col xs={12} md={12} className="marco noMobile"  >
<img src={ module4 } alt="1" />
</Col>
<Col xs={12} md={12}  className="parrafo">
    <p><br></br>
    Una de las piedras angulares del pensamiento chamánico es la importancia de expresar cada emoción que surge, especialmente durante los momentos difíciles ...<br></br>
Si no lo haces, te quedará con la energía atascada en tu cuerpo, lo que afecta tu inmunidad tanto a nivel espiritual como físico.<br></br>
Esta semana, Sandra compartirá cómo tus emociones se convierten en formas de energía, lo que ella llama dardos psíquicos ... y cómo terminas enviando estas emociones al colectivo sin saberlo.<br></br>
Aprenderá cómo ser responsable y respetuoso cuando surgen emociones negativas, y cómo evitar enviarlas al colectivo ... porque las formas de pensamiento negativo vuelven a todos nosotros tres veces, según la perspectiva chamánica.<br></br>
En este módulo, descubrirás:<br></br>
Las razones por las que muchos chamanes creen que los virus se crean a partir de formas de pensamiento negativas que inundan nuestro colectivo, reducen nuestra inmunidad y crean enfermedades contagiosas generalizadas.<br></br>
Formas saludables de expresar tus emociones, incluyendo trabajar con tu energía para asegurarte de que estás inundando al colectivo con amor y luz.<br></br>
Formas de protegerse espiritualmente durante todo el día
Cómo lidiar con el dolor y honrar a los seres que se han ido
Una ceremonia grupal para soñar y volver a crear nuevos pensamientos, deseos y realidades.<br></br>
    </p>
</Col>

</Row>





<Row>

<Col xs={12} md={12}  className="parrafo header">
     <h2> Módulo 5   </h2>
     <h3>
     Trabajando con la luna y los cristales: como transmitir energías sanadoras en la ceremonia
     </h3>
</Col>
<Col xs={12} md={12} className="marco "  >
<img src={ module5 } alt="1" />
</Col>
<Col xs={12} md={12}  className="parrafo">
    <p><br></br>
    Esta semana Sandra compartirá algunas de sus herramientas y enseñanzas espirituales más queridas, incluida la forma de trabajar con cristales curativos ...<br></br>
... y cultivar una comprensión más profunda de los ciclos de la luna y su impacto energético en todos nosotros.<br></br>
Descubrirás exactamente cómo la energía de la luna afecta al planeta ...<br></br>
... y cómo, cuando combinas la energía de la luna con los cristales correctos y realizas tus ceremonias en el momento correcto, la luna puede agregar un poder exponencial de curación y manifestación.<br></br>
En esta sesión, Sandra compartirá:<br></br>
¿Por qué la luz de la luna es una de las mejores formas de limpiar un cristal?<br></br>
Cómo infundir cristales con nueva energía
Las muchas formas en que los cristales son transmisores naturales de luz.<br></br>
¿Qué cristales pueden enseñarte a convertirte en un transmisor natural de luz?<br></br>
Una transmisión de curación grupal con la maestra de Sandra en los reinos invisibles, la diosa egipcia Isis, que trabajará contigo y tus compañeros participantes durante todo el curso.<br></br>

    </p>
</Col>

</Row>







<Row>

<Col xs={12} md={12}  className="parrafo header">
     <h2> Módulo 6   </h2>
     <h3>
     Aprovechando los elementos: Fusión y construcción de conexiones. 
     </h3>
</Col>
<Col xs={12} md={12} className="marco "  >
<img src={ module6 } alt="1" />
</Col>
<Col xs={12} md={12}  className="parrafo">
    <p><br></br>
    En la visión chamánica, los cinco elementos de la tierra, el agua, el fuego, el aire y el espacio están vivos, y nos dan vida.<br></br>
Lamentablemente, con nuestro mundo industrial lleno de tecnología y contaminación, hemos hecho todo lo posible para destruir estos elementos ...<br></br>
Y luego nos preguntamos por qué la gente se ha enfermado a una escala tan masiva. El mundo se ha visto obligado a limpiarse a sí mismo a través de tormentas, terremotos, inundaciones, enfermedades y más ...<br></br>
Según Sandra, todos estos fenómenos están conectados.<br></br>
En este módulo fundamental, Sandra compartirá cómo los chamanes siempre han sabido hablar con los elementos, respetándolos como familia ... y cómo todos podemos aprender a hacer lo mismo si estamos dispuestos a cambiar nuestras vidas y nuestra relación con los elementos.<br></br>
Esta semana explorarás:<br></br>
Formas específicas en que nuestra pérdida de conexión con la naturaleza y los elementos está alimentando las crisis de salud, así como el cambio climático.<br></br>
Cómo está la tierra donde vives, ya sea ciudad o país, para ayudarte a ser más fuerte en todos los niveles
Cómo los cinco elementos son tus aliados y cómo construir comunicación con ellos
Cómo vivir en un estado de armonía mientras aprovecha un nivel de flujo que te lleva a una salud sólida
Una práctica más profunda para fusionarse con los elementos, utilizando el fuego como ejemplo ... experimentarás cómo, al fusionarte con el fuego interior, aprenderás a equilibrar los estados de ansiedad y depresión.<br></br>

    </p>
</Col>

</Row>







<Row>

<Col xs={12} md={12}  className="parrafo header">
     <h2> Módulo 7   </h2>
     <h3>
     Viajando al futuro y de vuelta a los ancestros: Accediendo a la sabiduría para sobrevivir a la crisis actual. 
     </h3>
</Col>
<Col xs={12} md={12} className="marco "  >
<img src={ module7 } alt="1" />
</Col>
<Col xs={12} md={12}  className="parrafo">
    <p><br></br>
    Los antepasados ​​nos han dado todos los conocimientos que necesitamos para avanzar a través de lo que está sucediendo durante este momento de agitación ...<br></br>
Simplemente no estamos escuchando, según Sandra.
En esta clase final, Sandra compartirá poderosas ceremonias de curación que los chamanes han estado convocando durante miles de años ...<br></br>
... así como lo que los ancestros nos han estado diciendo sobre cómo tenemos que limpiar nuestras formas de pensar, cómo caminamos en la Tierra y mucho más.<br></br>
También aprovecharás la sabiduría de tus futuros antepasados. Ya sobrevivieron a los tiempos en que vivimos, entonces, ¿qué consejo tienen para compartir?<br></br>
En este módulo de cierre, experimentará:<br></br>
Las pistas y las migas de pan de nuestros antepasados ​​(pasado y futuro) nos han dejado, a lo que no hemos prestado atención
Un viaje para acceder a los seres en el futuro y descubrir lo que necesitamos agregar a nuestras vidas, desde nuestras dietas hasta nuestras prácticas de curación y todo lo demás.<br></br>
Un viaje a los futuros descendientes para llevar la curación de alta frecuencia a tu vida personal y profesional, incluido el uso de sonido y luz para la curación.<br></br>
Un momento para compartir historias y sabiduría, para que tú, Sandra y tus compañeros participantes puedan aprender y crecer juntos como una comunidad global unificada.<br></br>
    </p>
</Col>

</Row>



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
             {/*}  <Row>
                         <img src={Line} className="line1 noMobile" alt="line" ></img>
                         <img src={Rectangle2} alt="line " className="noMobile"></img>
                         <img src={Line} className="line2 noMobile" alt="line"></img>
               
                         <Col xs={12} md={12} > 
                              <a href={ storage.url_start_program }  title="Sandra" className="ctaVersion11" > { storage.version11.cta02 } </a>
                         </Col>    
     </Row>    */}
          </Container>



          <Container className="moduloAB003">
               
               <h2> Bonus del programa </h2>
               <h3> (Valorado en $100.00) </h3>

               <Row>
                    <Col xs={12} md={12} >
                    <p className="title">
                  Introducción a los Viajes Chamánicos <br></br>
                    (Si compras dentro de las 24 horas)
                    </p> 
                    </Col>

                    <Col xs={12} md={4} >

                    <img src={bonus1} alt="title"></img>

                     </Col>

                     <Col xs={12} md={8} >

<p>
Enseñanza de audio de Sandra Ingerman
Esta grabación fundamental te brinda instrucciones completas sobre el viaje chamánico, compartiendo sobre la práctica y te ayuda a encontrar tu propia puerta a los reinos invisibles. También te ofrece sugerencias que pueden profundizar tu trabajo y cubre algunos de los puntos más finos de la práctica para ayudarte a afinar tu propia práctica. También recibirás un Drumming Track for Journeying para ayudarte con tu práctica.
NOTA: Escucha esta enseñanza adicional antes de asistir a la primera sesión del curso para poder sumergirte directamente en el trabajo de viaje y aprovechar al máximo tu tiempo en clase con Sandra.

</p>
                   

                     </Col>
           </Row>    

              <Row>
                    <Col xs={12} md={12} >
                  <p className="title">
                  Extractos del Libro  de Ceremonia
                    </p> 
                    </Col>
                   

                     <Col xs={12} md={8} >

                          <p>
                          2 breves extractos en PDF de Sandra Ingerman
La magia de la ceremonia es dejar atrás tu vida ordinaria y entrar en un espacio sagrado. Realmente puedes participar con otros que están abriendo sus corazones junto contigo para crear un cambio positivo.
En estos extractos, Sandra te mostrará cómo diseñar ceremonias de curación y crear intenciones para aquellos que lleven la energía del amor, la luz, el apoyo, el honor y el respeto.

                          </p>

                   

                     </Col>
                     <Col xs={12} md={4} >

<img src={bonus2} alt="title"></img>

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
                    </p>  
                    <p>
                         Sandra, profesora de chamanismo de renombre mundial, ha enseñado durante casi 40 años. Ha impartido talleres internacionales sobre viajes chamánicos, curación y la reversión de la contaminación ambiental. 
                         Sandra es conocida por reunir a la comunidad espiritual global para realizar ceremonias transformadoras poderosas, y por inspirarnos a mantenernos firmes en la unidad para que hagamos nuestro propio trabajo de activismo espiritual y social mientras mantenemos una visión de esperanza y servimos como luz en el mundo.
                         </p>  <p>
                         También le apasiona ayudar a las personas a reconectarse con la naturaleza. Desde la década de 1980, miles de personas se han curado de traumas pasados ​​y presentes a través del clásico método de curación chamánica intercultural que Sandra enseña, llamado “recuperación del alma”.
                         Sandra, terapeuta matrimonial y familiar con licencia y consejera profesional de salud mental, también es una experta certificada en estrés traumático. La revista Watkins Body Mind Spirit la honró al incluirla en sus 100 personas más influyentes espiritualmente de 2020. También fue elegida como una de las 10 líderes espirituales principales de 2013 por la revista Spirituality and Health, y recibió el Premio a la Paz 2007 de la Fundación Global para la Medicina Integrativa.Sandra se unió en sociedad con Renee Baribeau para crear un podcast semanal de 30 minutos llamado The Shamans Cave.

                    </p>
          
                </Col>
            
                </Row>


            </Container>

            <Container className="moduloAB004 graduados">
               <Row>
                    <Col xs={12} md={12} > 
                         <h2>“ Redirigió mi vida completamente hacia mi verdadero propósito".</h2>  
                         <img  className="stars"  src={ stars } alt="1" />
                    </Col>         
                    <Col xs={12} md={12} > 
                    <p>
                    Sandra está verdaderamente dotada para facilitar un curso en línea. 
                    El chamanismo se puso completamente a mi disposición con este curso: 
                    no solo el acceso en línea lo hizo posible, sino que su método y 
                    conocimiento me mostraron que el chamanismo es verdaderamente para
                     cada persona, no solo para los llamados elegidos ... ni las drogas
                      y ni las alucinaciones son requeridas en absoluto! Gracias, 
                      Sandra: ha redirigido mi vida por completo hacia mi verdadero propósito.
                    <br></br>- Shar-la, Nueva Gales del Sur, Australia
                    </p>
                    </Col>
               </Row>  


               <Row>
                  
                    <Col xs={12} md={12} > 
                         <h2>
                         "Abrí los ojos a un universo completamente nuevo de comunicación con la naturaleza”        
                         </h2>  
                         <img  className="stars"  src={ stars } alt="1" />
                    </Col>         

                    <Col xs={12} md={12} > 
                    <p>
                    Este curso me abrió los ojos a un universo completamente nuevo de comunicación con la naturaleza y su cuidado
                    <br></br>- Alexandra, Bélgica
                    </p>
                    </Col>
               </Row>  


               <Row>
                  <Col xs={12} md={12} > 
                       <h2>
                       "Capas de mi vida finalmente fueron reconocidas y dejadas ir".
                       </h2>  

                       <img  className="stars"  src={ stars } alt="1" />
                  </Col>         
                  <Col xs={12} md={12} > 
                    <p>
                    Yo recomendaría altamente esta clase. Sandra es una bendición.
                     A través de todos los diferentes viajes, capas de mi vida finalmente fueron reconocidas y
                      dejadas ir. Realmente cambia la vida.
                    <br></br>- Leslie Styhl, Diamondhead, Mississippi
                    </p>
                  </Col>

             </Row>  

             <Row>
                  
                  <Col xs={12} md={12} > 
                       <h2>
                       "Me he vuelto más consciente del mundo invisible, más sensible y me siento más conectada, y no me siento sola”
                       </h2>  
                       <img  className="stars"  src={ stars } alt="1" />
                  </Col>         

                  <Col xs={12} md={12} > 
                         <p>
                         Me he vuelto más consciente del mundo invisible, más sensible y me siento más conectada, 
                         no me siento sola. Puedo ver pequeños milagros y belleza a mi alrededor todos los días. 
                         Me encanta la forma gentil de viajar de Sandra.
                         <br></br>- Alena, República Checa
                         </p>
                  </Col>

             </Row>          

             <Row>
                  
                  <Col xs={12} md={12} > 
                       <h2>
                       "Estoy lleno de alegría, profunda gratitud y creando mi propio destino inspirada en Sandra ..."
                      </h2>  
                       <img  className="stars"  src={ stars } alt="1" />
                  </Col>         

                  <Col xs={12} md={12} > 
                    <p>
                    Sandra tiene un nivel de dominio en su conocimiento del chamanismo, los viajes y la enseñanza. 
                    Ella nos guió a todos con tanto amor, pasión y apoyo, y adaptó 
                    las enseñanzas para que todos, ya sean nuevos o con más experiencia, 
                    puedan aprender esta práctica. Es una mujer extraordinaria que vive y expresa plenamente su destino, 
                    que es enseñar a otros estas prácticas profundas y que cambian la vida ... 
                    No puedo expresar realmente las experiencias que he tenido más que estoy llena de alegría,
                     y profunda gratitud para crear mi propio destino inspirada por Sandra, sus enseñanzas y
                      mi propio deseo de profundizar mis huellas en el Camino de la Medicina.
                    <br></br>- Natara Landrau, Placitas, Nuevo México </p>
                  </Col>

             </Row>    

             <Row>
                  <Col xs={12} md={12} > 
                       <h2>
                       "Un soplo de aire fresco hermoso y esperanzador en lo que puede parecer un mundo abrumadoramente caótico".
                       </h2>  
                       <img  className="stars"  src={ stars } alt="1" />
                  </Col>         

                  <Col xs={12} md={12} > 
                         <p>
                         Sandra es una maestra tan brillante, y su forma de estar en este mundo también se siente tan profundamente alineada con mi vida. Sus prácticas y enseñanzas sobre la conexión con la naturaleza son un soplo de aire fresco hermoso y esperanzador en lo que puede parecer un mundo abrumadoramente caótico. Continuaré refiriéndome a estas clases y prácticas con frecuencia. No tengo dudas de que mi vida ha cambiado para mejor desde este curso.
                         <br></br>- Catherine, Columbia Británica, Canadá
                         </p>
                  </Col>
             </Row>    

             <Row>
                  <Col xs={12} md={12} > 
                       <h2>
                       "Redescubre tu propia conexión profunda con la Fuente y la Verdad ..."
                       </h2>  
                       <img  className="stars"  src={ stars } alt="1" />
                  </Col>         

                  <Col xs={12} md={12} > 
                  <p>
                  Cualquiera que esté buscando una lámpara en la oscuridad, una guía confiable para mantener el espacio para que suceda el gran trabajo, un corazón para ver mientras redescubres tu propia conexión profunda con la Fuente y la Verdad ... este curso es para ti. 
                  <br></br>- Jill Moody, Victoria, Australia
                  </p>
                  </Col>
             </Row>    

             <Row>
                  <Col xs={12} md={12} > 
                       <h2>
                       "El trampolín para elevar mi alma al mundo del chamanismo y el trabajo ligero".
                       </h2>  
                       <img  className="stars"  src={ stars } alt="1" />
                  </Col>         
                  <Col xs={12} md={12} > 
                  <p>
                  Gracias por proporcionar el trampolín para elevar mi alma al mundo del chamanismo y
                   el trabajo ligero. Soy una mejor persona por la experiencia y las enseñanzas 
                   recibidas de mi amiga Sandra Ingerman. Somos bendecidos de tener su pasión curativa,
                    energía curiosa y formas juguetonas. Que todos nos alineemos para proteger a nuestra 
                    Gaia y sus seres. ¡Adelante!
                  <br></br>- Anónimo
                  </p>
                  </Col>
             </Row>   

             <Row>
                  <Col xs={12} md={12} > 
                       <h2>
                       "Crecí rodeada de árboles y seres naturales y esta clase me ayudó a conectarme con ellos".
                       </h2>  
                       <img  className="stars"  src={ stars } alt="1" />
                  </Col>         
                  <Col xs={12} md={12} > 
                  <p>
                  Esta fue una gran clase y Sandra es una excelente maestra. Crecí
                   rodeada de árboles y seres naturales y esta clase me ayudó a conectarme con ellos.
                  <br></br>- Sarah, Sebastopol, California
                  </p>
                  </Col>
             </Row>   

             <Row>
                  <Col xs={12} md={12} > 
                       <h2>
                       "Yo ... no tenía idea de tener relaciones tan íntimas con los Seres Naturales individuales de esta manera".
                       </h2>  
                       <img  className="stars"  src={ stars } alt="1" />
                  </Col>         

                  <Col xs={12} md={12} > 
                  <p>
                  Fue una alegría y una experiencia profunda comenzar a forjar relaciones con cuatro árboles en mi jardín. Siempre me sentí conectada con la naturaleza, pero no tenía idea de forjar relaciones tan íntimas con los seres naturales individuales de esta manera. También estoy agradecida por aprender a viajar a varios elementos o seres de la naturaleza para conversar y aprender de ellos. Estoy agradecida por las ceremonias de sanación en las que participamos. Estoy profundamente agradecida por poder aprender de Sandra Ingerman, quien es la maestra más increíble, con gran sabiduría, corazón y presencia.
                  <br></br>- Paula, St. Paul, Minnesota
                  </p>
                  </Col>
             </Row>   
         </Container>

        <Container className="moduloAB005">

          <div className="wrapper">

          <PrincingCard  img={ Shopping } />

          </div> 
          <Footer pages='1'   />
           </Container>    
          
         </div> }
     
        </div>
        </React.Fragment> 

     )
        
}

export default withRouter(Page02)