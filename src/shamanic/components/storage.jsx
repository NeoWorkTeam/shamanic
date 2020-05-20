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


///const [active,setActive] = React.useState(false)
//const [tareas,setTareas] = React.useState([])

/*

React.useEffect(() => {

    const obtenerData = async () => {

            try {

                const db = firebase.firestore()
                const data = await  db.collection('Settings').get()
                const arrayData = data.docs.map(doc => ({ id: doc.id,...doc.data() }))
            
                setTareas(arrayData)

                if(data.docs){
                    setActive(true)
                }

            } catch (error) {
                
            }

    }

    obtenerData()

    },[])
*/
    //

    const data = 
    {
        ctaColor:"#DA5E11",
        cta01:"Comenzar Programa",
        cta01_loading_message:"Redirigiendo",
        cta02:"Presentación del Curso",
        cta02_loading_message:"Cargando",
        video:"https://player.vimeo.com/video/402745799",
        facebook:"http://facebook.co/",
        youtube:"http://neowork.co/",
        instagram:"http://neowork.co/",
        url_start_program:"https://shiftnetwork.infusionsoft.app/app/orderForms/01ShamanicPractices01_20?_ga=2.156084539.1228671055.1589702179-1213824032.1589566547&cookieUUID=ae8b33a2-b771-470c-aa54-e2369c6f37cd",
        contactForm:{
            field01 : "Nombre ",
            field01_message_null:"Por favor ingrese el Nombre Completo",
            field02 : "Correo Electrónino",
            field02_message_null:"Disculpe el Correo Electrónino no es valido",
        },
        bonusesSection:{
            title : "The Shamanic Practices Bonus Collection",
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
            title: "297$",
            icon:"https://img.pngio.com/vector-hand-drawn-black-and-white-earth-vector-earth-hand-png-earth-black-and-white-595_595.png"
        },footer:{

       copyright:"2020 The Shift Network"

        },
        modules:[
        {
            id:1,
            module:"Módulo 01",
            title: " Re-tejiendo la historia de tu creación para la salud",
            description: "Explora cómo los chamanes interactúan directamente con los espíritus para abordar los aspectos espirituales de la enfermedad, realizar recuperaciones de almas, información divina y mucho más.",
            avatar:module1
        },
        {
            id:2,
            module:"Módulo 02",
            title: "Transfiguración y viendo el mundo a través de los ojos del espíritu",
            description: "Conocerás al espíritu de la tierra donde vives, para que puedas construir una relación sólida con él.",
            avatar:module2
        },
        {
            id:3,
            module:"Módulo 03",
            title: "Viaje de varios pasos para identificar el espíritu que se ofrece como voluntario para trabajar contigo y discernir qué tipo de poder tienen.",
            description: "Fortalece tu corazón/Cambia tu mentalidad/Empodera a tu comunidad.",
            avatar:module3
       },{
            id:4,
            module:"Módulo 04",
            title: "Sanando pensamientos tóxicos: cómo transmutar y desmembrar el miedo, la ira, el dolor y la traición.",
            description: "Sandra compartirá cómo tus emociones se convierten en formas de energía, lo que ella llama dardos psíquicos ... y cómo terminas enviando estas emociones al colectivo sin saberlo.",
            avatar:module4
       },{
        id:5,
        module:"Módulo 05",
        title: "Trabajando con la luna y los cristales: como transmitir energías sanadoras en la ceremonia",
        description: "Explora cómo los chamanes establecieron fuertes relaciones con todos los seres de la naturaleza en su paisaje.",
        avatar:module5
        },{
            id:6,
            module:"Módulo 06",
            title: "Aprovechando los elementos: Fusión y construcción de conecciones.",
            description: "Accede a viajes chamánicos que te guiarán para que veas al mundo de una mejor manera.",
            avatar:module6
        },
        {
            id:7,
            module:"Módulo 07",
            title: "Viajando al futuro y de vuelta a los ancestros: Accediendo a la sabiduría para sobrevivir a la crisis actual. ",
            description: "Sandra explicará las formas únicas en que los chamanes perciben las enfermedades físicas y emocionales. También compartirá un método de curación simple pero poderoso para el que te sentirás completamente preparado.",
            avatar:module7
        }
        ], features:[
         
            {
                id:1,
                title: "Fortalece tu Corazón",
                description: "Recibe una ceremonia sanadora y prácticas chamánicas para calmar tu miedos, mejorar tu salud y fuerza, además de irradiar luz espiritual para el beneficio de todos.",
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
            text3:"Es hora de aprovechar toda la sabiduría más allá de lo físico, para guiarnos hacia nuestro bienestar personal, para navegar a través de tormentas de emociones, y para fortalecer energéticamente los lazos desgastados de la comunidad.",
            avatar:"https://img.pngio.com/vector-hand-drawn-black-and-white-earth-vector-earth-hand-png-earth-black-and-white-595_595.png",
            background:"https://img.pngio.com/vector-hand-drawn-black-and-white-earth-vector-earth-hand-png-earth-black-and-white-595_595.png"
        }, curso:{
            title:"Nuestro Curso",
            text1:"Despierte a una vida plena de alegría y servicio con la guía experta del maestro transformador más importante del mundo.",
            text2:"A través de nuestro curso, tiene acceso a capacitaciones poderosas para ayudarlo a alcanzar su máximo potencial y llevar todos los aspectos de su vida al siguiente nivel.",
            avatar:"https://img.pngio.com/vector-hand-drawn-black-and-white-earth-vector-earth-hand-png-earth-black-and-white-595_595.png",
            background:"https://img.pngio.com/vector-hand-drawn-black-and-white-earth-vector-earth-hand-png-earth-black-and-white-595_595.png"
        },
        bonuses:[
            {
                id:1,
                title: "¿Puedes practicar chamanismo y conservar tu fe cristiana?",
                avatar:bonus1,
                author:"NOTE: Please listen to this bonus teaching before attending the first course session so you can dive right into the journeying work and make the best use of your time in class with Sandra."
            },
            {
                id:2,
                title: "Ceremonia de fuego virtual y liberar el dolor",
                avatar:bonus2,
                author:"HeatherAsh Amara is the author of Warrior Goddess Training: Become the Woman You Are Meant to Be... The Seven Secrets to Healthy, Happy Relationships with don Miguel Ruiz... and The Warrior Heart Practice: A Simple Process to Transform Confusion Into Clarity and Pain Into Peace. The heart of her teachings stems from her long Toltec apprenticeship and teaching partnership with don Miguel Ruiz. She’s the founder of Toci, The Toltec Center of Creative Intent."
            },
            {
                id:3,
                title: "Medicina para la tierra ",
                author:"Hank Wesselman, PhD, is an anthropologist and evolutionary biologist who has conducted fieldwork with international research teams investigating the mystery of human origins in the fossil beds of eastern Africa’s Great Rift Valley. In addition to his scientific publications, he’s the author of several books on shamanism, including his Spiritwalker Trilogy, the award-winning Awakening to the Spirit World (with Sandra Ingerman), and The Bowl of Light: Ancestral Wisdom From a Hawaiian Shaman. ",
                avatar:bonus3
           },{
                id:4,
                title: "Naturaleza, herramientas sagradas y llevando el poder. ",
                author: "Cecile Carson, MD, has been conducting interviews for a forthcoming book on shamanic practitioners who integrate shamanism into Western culture in interesting and unusual ways — ways that open our hearts and minds to what’s possible for healing our troubled world. She’s an internist also trained in psychiatry, who for 30 years focused much of her work on helping people deal with life-threatening illnesses such as HIV and cancer. Recognizing that illness often requires soul-level work, she expanded her focus to spiritual coaching and healing. ",
                avatar:bonus4
           }],
        includes:[
                {
                    id:1,
                    title: "Siete sesiones de clases grabadas de 90 minutos",
                },
                {
                    id:2,
                    title: "Siete transcritos de las sesiones de clase en PDF",
              },
                {
                    id:3,
                    title: "Bunus: Extractos del libro de ceremonia",
               },{
                    id:4,
                    title: "Bonus: Introducción al viaje chamánico",
               }]

   }   


    return   data 

}
     
export default Storage