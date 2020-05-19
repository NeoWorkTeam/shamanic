import React,{ useState } from 'react'
import { firebase } from "../components/firebase"


import module1 from '../img/module1.jpg'
import module2 from '../img/moduel2.jpg'
import module3 from '../img/module3.jpg'
import module4 from '../img/module4.jpg'

import feature1 from '../img/feature1.png'
import feature2 from '../img/feature2.png'
import feature3 from '../img/feature3.png'


import bonus1 from '../img/bonus1.png'
import bonus2 from '../img/bonus1.png'
import bonus3 from '../img/bonus1.png'
import bonus4 from '../img/bonus1.png'

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
            title01:"Prácticas Shamánicas",
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
            module:"Modulo 01",
            title: "Fortalece tu corazón/Cambia tu mentalidad/Empodera a tu comunidad.",
            description: "Fortalece tu corazón/Cambia tu mentalidad/Empodera a tu comunidad.",
            avatar:module1
        },
        {
            id:2,
            module:"Modulo 02",
            title: "Recibe una ceremonia sanadora y prácticas chamánicas para calmar tu miedos, mejorar tu salud y fuerza, además de irradiar luz espiritual para el beneficio de todos.",
            description: "Fortalece tu corazón/Cambia tu mentalidad/Empodera a tu comunidad.",
            avatar:module2
        },
        {
            id:3,
            module:"Modulo 03",
            title: "Explora las muchas razones por las que las prácticas chamánicas pueden darte sabiduría esencial para navegar y afrontar distintas crisis.",
            description: "Fortalece tu corazón/Cambia tu mentalidad/Empodera a tu comunidad.",
            avatar:module3
       },{
            id:4,
            module:"Modulo 04",
            title: "Accede a viajes chamánicos que te guiarán para que veas al mundo de una mejor manera.",
            description: "Accede a viajes chamánicos que te guiarán para que veas al mundo de una mejor manera.",
            avatar:module4
       },
       
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
                title: "Introduction to Shamanic Journeying",
                subtitle: "Audio Teaching From Sandra Ingerman",
                description: "This foundational recording gives you full instructions into shamanic journeying, sharing about the practice and helping you find your own doorway into the invisible realms. It also gives you suggestions that can deepen your work, and covers some of the finer points of journeying to help you fine-tune your own practice. You’ll also receive a Drumming Track for Journeying to assist you with your practice. ",
                avatar:"https://theshiftnetwork.com/sites/all/modules/page_files/2020/258254.01ShamanicPractices01_20/images/bonus_Introduction.jpg",
                author:"NOTE: Please listen to this bonus teaching before attending the first course session so you can dive right into the journeying work and make the best use of your time in class with Sandra."
            },
            {
                id:2,
                title: "Honoring the Elements & Recapitulation",
                subtitle: "Video Dialogue With Sandra Ingerman and HeatherAsh Amara; Includes PDF Companion",
                description: "Receive beautiful elemental prayers that HeatherAsh Amara created, which you can use as part of a powerful morning practice. Sandra and HeatherAsh also discuss the importance of staying connected and communicating with the elements. And HeatherAsh weaves in a form of recapitulation using the elements. As you’ll explore, recapitulation is a shamanic practice to reclaim energy from the past so you have more energy for the present.",
                avatar:"https://theshiftnetwork.com/sites/all/modules/page_files/2020/258254.01ShamanicPractices01_20/images/bonus_HeatherAshAmara.jpg",
                author:"HeatherAsh Amara is the author of Warrior Goddess Training: Become the Woman You Are Meant to Be... The Seven Secrets to Healthy, Happy Relationships with don Miguel Ruiz... and The Warrior Heart Practice: A Simple Process to Transform Confusion Into Clarity and Pain Into Peace. The heart of her teachings stems from her long Toltec apprenticeship and teaching partnership with don Miguel Ruiz. She’s the founder of Toci, The Toltec Center of Creative Intent."
            },
            {
                id:3,
                title: "The Emergence of Western Shamanism ",
                subtitle: "Audio Dialogue With Sandra Ingerman and Hank Wesselman",
                description: "Shamanism is a living, breathing spiritual tradition that has evolved through tens of thousands of years so that it remains relevant to the times in which we live. In this special bonus, Sandra and Hank Wesselman discuss how the practice of shamanism is evolving, and the revival of interest in the practice.",
                author:"Hank Wesselman, PhD, is an anthropologist and evolutionary biologist who has conducted fieldwork with international research teams investigating the mystery of human origins in the fossil beds of eastern Africa’s Great Rift Valley. In addition to his scientific publications, he’s the author of several books on shamanism, including his Spiritwalker Trilogy, the award-winning Awakening to the Spirit World (with Sandra Ingerman), and The Bowl of Light: Ancestral Wisdom From a Hawaiian Shaman. ",
                avatar:"https://theshiftnetwork.com/sites/all/modules/page_files/2020/258254.01ShamanicPractices01_20/images/bonus_HankWesselman.jpg"
           },{
                id:4,
                title: "Shamanism in Ordinary Landscapes",
                subtitle: "Audio Dialogue With Sandra Ingerman and Cecile Carson",
                description: "Curious how shamanism can emerge in everyday circumstances? Cecile Carson speaks about her research into how people today are bridging shamanism into the work they do. You’ll hear about some of the people Cecile has written about, including a high school cook, a mall Santa Claus, a theater director, and a neurobiology grad student working in an animal lab.    ",
                author: "Cecile Carson, MD, has been conducting interviews for a forthcoming book on shamanic practitioners who integrate shamanism into Western culture in interesting and unusual ways — ways that open our hearts and minds to what’s possible for healing our troubled world. She’s an internist also trained in psychiatry, who for 30 years focused much of her work on helping people deal with life-threatening illnesses such as HIV and cancer. Recognizing that illness often requires soul-level work, she expanded her focus to spiritual coaching and healing. ",
                avatar:"https://theshiftnetwork.com/sites/all/modules/page_files/2020/258254.01ShamanicPractices01_20/images/bonus_CecileCarson.jpg"
           },{
            id:4,
            title: "Excerpts From The Book of Ceremony",
            subtitle: "2 Short PDF Excerpts From Sandra Ingerman",
            description: "The magic of ceremony is leaving your ordinary life behind and stepping into a sacred space. You can truly participate with others who are opening their hearts along with you to create positive change.",
            author: "In these excerpts, Sandra will show you how to design healing ceremonies and create intentions for them that carry the energy of love, light, support, honor, and respect. ",
            avatar:"https://theshiftnetwork.com/sites/all/modules/page_files/2020/258254.01ShamanicPractices01_20/images/bonus_Ceremony.jpg"
           }
            ],
        includes:[
                {
                    id:1,
                    title: "Seven 120-Minute Class Sessions With Sandra Ingerman",
                },
                {
                    id:2,
                    title: "Seven Video Recordings of Class Sessions",
              },
                {
                    id:3,
                    title: "Seven Audio Recordings of Class Sessions",
               },{
                    id:4,
                    title: "Seven PDF Transcripts of Class Sessions",
               },{
                id:5,
                title: "Seven 30-Minute Interactive Group Practice Sessions",
               },{
                id:6,
                title: "Online Community With Sandra and Assistants",
               },{
                id:7,
                title: "Interactive Exercises and Questions for Each Lessons",
               },{
                id:8,
                title: "The Shamanic Practices Bonus Collection",
               }]

   }   


    return   data 

}
     
export default Storage