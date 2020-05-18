import React,{ useState } from 'react'
import { firebase } from "../components/firebase"


import module1 from '../img/module1.jpg'
import module2 from '../img/moduel2.jpg'
import module3 from '../img/module3.jpg'
import module4 from '../img/module4.jpg'

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
        cta01:"Start Program",
        cta01_loading_message:"Redirigiendo",
        cta02:"Start Free Course ",
        cta02_loading_message:"Loading",
        video:"http://neowork.co/Banner.mp4",
        facebook:"http://facebook.co/",
        youtube:"http://neowork.co/",
        instagram:"http://neowork.co/",
        url_start_program:"https://shiftnetwork.infusionsoft.app/app/orderForms/01ShamanicPractices01_20?_ga=2.156084539.1228671055.1589702179-1213824032.1589566547&cookieUUID=ae8b33a2-b771-470c-aa54-e2369c6f37cd",
        contactForm:{
            field01 : "Full Name",
            field01_message_null:"hey se te olvido el nombre",
            field02 : "Email Address",
            field02_message_null:"No es correcto",
        },
        bonusesSection:{
            title : "Program Bonuses",
            background:""
        },
        banner:{
            title01:"Shamanic Journeying",
            title02:"with",
            title03:"Sandra Ingerman",
            background:""
        },
        coursesSection:{
            title:"Contenido del Curso !"
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
            module:"Module 01",
            title: "Fortalece tu corazón/Cambia tu mentalidad/Empodera a tu comunidad.",
            description: "Fortalece tu corazón/Cambia tu mentalidad/Empodera a tu comunidad.",
            avatar:module1
        },
        {
            id:2,
            module:"Module 02",
            title: "Recibe una ceremonia sanadora y prácticas chamánicas para calmar tu miedos, mejorar tu salud y fuerza, además de irradiar luz espiritual para el beneficio de todos.",
            description: "Fortalece tu corazón/Cambia tu mentalidad/Empodera a tu comunidad.",
            avatar:module2
        },
        {
            id:3,
            module:"Module 03",
            title: "Explora las muchas razones por las que las prácticas chamánicas pueden darte sabiduría esencial para navegar y afrontar distintas crisis.",
            description: "Fortalece tu corazón/Cambia tu mentalidad/Empodera a tu comunidad.",
            avatar:module3
       },{
            id:4,
            module:"Module 04",
            title: "Accede a viajes chamánicos que te guiarán para que veas al mundo de una mejor manera.",
            description: "Accede a viajes chamánicos que te guiarán para que veas al mundo de una mejor manera.",
            avatar:module4
       },
       
        ],
        about:{
            title:"About Sandra or Courses",
            text1:"Sandra has been at the forefront of bringing shamanic practices to a global audience, training tens of thousands of practitioners worldwide...",
            text2:"As the scope of our current crises becomes more evident, Sandra has offered to share some of the most valuable shamanic practices and tools...",
            text3:"It’s time to tap into powerful wisdom beyond the physical — to guide us in right action for our personal wellbeing, to navigate emotional storms, and to energetically strengthen frayed community bonds.",
            avatar:"https://img.pngio.com/vector-hand-drawn-black-and-white-earth-vector-earth-hand-png-earth-black-and-white-595_595.png",
            background:"https://img.pngio.com/vector-hand-drawn-black-and-white-earth-vector-earth-hand-png-earth-black-and-white-595_595.png"
        },
        bonuses:[
            {
                id:1,
                title: "Strengthen Your Heart 1",
                description: "Fortalece tu corazón/Cambia tu mentalidad/Empodera a tu comunidad.",
                avatar:bonus1
            },
            {
                id:2,
                title: "Strengthen Your Heart 2",
                description: "Fortalece tu corazón/Cambia tu mentalidad/Empodera a tu comunidad.",
                avatar:bonus2
            },
            {
                id:3,
                title: "Strengthen Your Heart 3",
                description: "Fortalece tu corazón/Cambia tu mentalidad/Empodera a tu comunidad.",
                avatar:bonus3
           },{
                id:4,
                title: "Strengthen Your Heart 4",
                description: "Fortalece tu corazón/Cambia tu mentalidad/Empodera a tu comunidad.",
                avatar:bonus4
           }
            ],
        includes:[
                {
                    id:1,
                    title: "Strengthen Your Heart 1",
                },
                {
                    id:2,
                    title: "Strengthen Your Heart 2",
              },
                {
                    id:3,
                    title: "Strengthen Your Heart 3",
               },{
                    id:4,
                    title: "Strengthen Your Heart 4",
               }
                ]

   }   


    return   data 

}
     
export default Storage