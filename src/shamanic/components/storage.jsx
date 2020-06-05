import React,{ useState } from 'react'
import { firebase } from "../components/firebase"


import module1 from '../img/module1.jpg'
import module2 from '../img/moduel2.jpg'
import module3 from '../img/module3.jpg'
import module4 from '../img/module4.jpg'
import module5 from '../img/module5.jpg'
import module6 from '../img/module6.jpg'
import module7 from '../img/module7.jpg'


import feature1 from '../img/feature1.png'
import feature2 from '../img/feature2.png'
import feature3 from '../img/feature3.png'


import bonus1 from '../img/bonus1.jpg'
import bonus2 from '../img/bonus2.jpg'
import bonus3 from '../img/bonus3.jpg'
import bonus4 from '../img/bonus4.jpg'

function Storage(){

    const data =  {

        version01:{
            cta01: "Empieza tu Experiencia Sanadora",
            cta01_loading_message:"Redirigiendo",
            cta02:"Regístrate Ahora",
            cta02_loading_message:"Cargando",
            oferta_url: "/practicas-chamanicas/oferta01",
            intro_url: "/practicas-chamanicas/intro01"
        },
        version02:{
                cta01: "Empieza tu Experiencia Sanadora Gratis",
                cta01_loading_message:"Redirigiendo",
                cta02:"Registrate por sólo $147",
                cta02_loading_message:"Cargando",
                descuento: '$297',
                oferta_url: "/practicas-chamanicas/oferta02",
                intro_url: "/practicas-chamanicas/intro02"
        },
         version11:{
                cta01: "Empieza tu Experiencia Sanadora Gratis",
                cta01_loading_message:"Redirigiendo",
                cta02:"Registrate por sólo $147",
                cta02_loading_message:"Cargando",
                descuento: '$297',
                oferta_url: "/practicas-chamanicas/oferta11",
                intro_url: "/practicas-chamanicas/intro11"
        },
        gabriel:{  
                url_start_program:"https://shiftnetwork.infusionsoft.com/app/orderForms/f4bfe6f9-7f14-4bb7-80ed-f36157171439",
                url_sales_pages:"/gabriel-intro",
                oferta_url: "/gabriel",
                intro_url: "/gabriel-intro"

            },
        ctaColor:"#DA5E11",
        cta01: "Regístrate Ahora",
        cta01_loading_message:"Redirigiendo",
        cta02:"Empieza tu Experiencia Sanadora",
        cta02_loading_message:"Cargando",
        video:"https://vimeo.com/421621071",
            facebook:"https://www.facebook.com/The-Shift-Network-Espa%C3%B1ol-104481994597834/",
        url_start_program:"https://shiftnetwork.infusionsoft.app/app/orderForms/210d9539-00d2-452a-b204-9cc7f7a53487",
        contactForm:{
            field01 : "Nombre ",
            field01_message_null:"Por favor ingrese el Nombre Completo",
            field02 : "Correo Electrónico",
            field02_message_null:"Disculpe el Correo Electrónico no es válido",
        },
        bonusesSection:{
            title : "Bonus del Programa",
            background:""
        },
        banner:{
            title01:"Prácticas Chamánicas",
            title02:"con",
            title03:"Sandra Ingerman",
            background:""
        },
        coursesSection:{
            title:"Contenido del Curso"
        },
        includesSection:{
            title: "$147 USD",
            icon:"https://img.pngio.com/vector-hand-drawn-black-and-white-earth-vector-earth-hand-png-earth-black-and-white-595_595.png"
        },footer:{

       copyright:"2020 The Shift Network"

        },
        modules:[
        {
            id:1,
            module:"Módulo 1",
            title: " Re-tejiendo la historia de tu creación para la salud",
            description: "Explora cómo los chamanes interactúan directamente con los espíritus para abordar los aspectos espirituales de la enfermedad, realizar recuperaciones de almas, información divina y mucho más.",
            avatar:module1
        },
        {
            id:2,
            module:"Módulo 2",
            title: "Transfiguración y viendo el mundo a través de los ojos del espíritu",
            description: "Conocerás al espíritu de la tierra donde vives, para que puedas construir una relación sólida con él.",
            avatar:module2
        },
        {
            id:3,
            module:"Módulo 3",
            title: "Invocando sueños de sanidad y cambiando tu realidad diurna",
            description: " Viaje de varios pasos para identificar el espíritu que se ofrece como voluntario para trabajar contigo y discernir qué tipo de poder tienen.",
            avatar:module3
       },{
            id:4,
            module:"Módulo 4",
            title: "Sanando pensamientos tóxicos: cómo transmutar y desmembrar el miedo, la ira, el dolor y la traición.",
            description: "Sandra compartirá cómo tus emociones se convierten en formas de energía, lo que ella llama dardos psíquicos ... y cómo terminas enviando estas emociones al colectivo sin saberlo.",
            avatar:module4
       },{
        id:5,
        module:"Módulo 5",
        title: "Trabajando con la luna y los cristales: como transmitir energías sanadoras en la ceremonia",
        description: "Explora cómo los chamanes establecieron fuertes relaciones con todos los seres de la naturaleza en su paisaje.",
        avatar:module5
        },{
            id:6,
            module:"Módulo 6",
            title: "Aprovechando los elementos: Fusión y construcción de conecciones.",
            description: "Accede a viajes chamánicos que te guiarán para que veas al mundo de una mejor manera.",
            avatar:module6
        },
        {
            id:7,
            module:"Módulo 7",
            title: "Viajando al futuro y de vuelta a los ancestros: Accediendo a la sabiduría para sobrevivir a la crisis actual. ",
            description: "Sandra explicará las formas únicas en que los chamanes perciben las enfermedades físicas y emocionales. También compartirá un método de curación simple pero poderoso para el que te sentirás completamente preparado.",
            avatar:module7
        }
        ], features:[
         
            {
                id:1,
                title: "Fortalece tu Corazón",
                description: "Recibe una ceremonia sanadora y prácticas chamánicas para calmar tus miedos, mejorar tu salud y fuerza, además de irradiar luz espiritual para el beneficio de todos.",
                avatar:feature1
            },
            {
                id:2,
                description: "Explora las muchas razones por las que las prácticas chamánicas pueden darte sabiduría esencial para navegar y afrontar distintas crisis.",
                title: "Cambia tu Mentalidad",
                avatar:feature2
           },
           {
               id:3,
               title: "Consolida tu Comunidad",
               description: "Accede a viajes chamánicos que te guiarán para que veas al mundo de una mejor manera.",
               avatar:feature3
          }, 
            ],
        about:{
            title:"Acerca de Sandra Ingerman",
            text1:"Sandra tiene una trayectoria de más de 20 años impartiendo las prácticas chamánicas a un público global, entrenando a decenas de miles alrededor del mundo…",
            text2:"Debido a que el alcance de la crisis actual es cada vez más evidente, Sandra ha ofrecido compartir algunas de las más valiosas herramientas de las prácticas chamánicas…",
            text3:"Es hora de aprovechar toda la sabiduría más allá de lo físico, para guiarnos hacia nuestro bienestar personal.",
            avatar:"https://img.pngio.com/vector-hand-drawn-black-and-white-earth-vector-earth-hand-png-earth-black-and-white-595_595.png",
            background:"https://img.pngio.com/vector-hand-drawn-black-and-white-earth-vector-earth-hand-png-earth-black-and-white-595_595.png"
        }, curso:{
            title:"Nuestro Curso",
            text1:"Despierta a una vida plena de alegría y servicio con la orientación de la mejor maestra transformadora del mundo.",
            text2:"A través de nuestro curso, tienes acceso a poderosos entrenamientos para ayudarte a alcanzar tu máximo potencial y llevar todos los aspectos de tu vida al siguiente nivel.",
            avatar:"https://img.pngio.com/vector-hand-drawn-black-and-white-earth-vector-earth-hand-png-earth-black-and-white-595_595.png",
            background:"https://img.pngio.com/vector-hand-drawn-black-and-white-earth-vector-earth-hand-png-earth-black-and-white-595_595.png"
        },bonuses:[
            {
                id:1,
                title: "¿Puedes practicar chamanismo y conservar tu fe cristiana?",
                avatar:bonus1
            },
            {
                id:2,
                title: "Ceremonia de fuego virtual y liberar el dolor",
                avatar:bonus2               
            },
            {
                id:3,
                title: "Medicina para la tierra ",
                avatar:bonus3
           },{
                id:4,
                title: "Naturaleza, herramientas sagradas y llevando el poder. ",
                avatar:bonus4
           }],
        includes:[
                {
                    id:1,
                    title: "Siete Sesiones de Clases Grabadas de 90 Minutos",
                },
                {
                    id:2,
                    title: "Siete Transcritos de las Sesiones de Clase en PDF",
              },
                {
                    id:3,
                    title: "Bonus: Extractos del Libro de Ceremonia",
               },{
                    id:4,
                    title: "Bonus: Introducción al Viaje Chamánico (Si lo adquieres en las primeras 24 horas)",
               }]

   }   

   return data

}
     
export default Storage