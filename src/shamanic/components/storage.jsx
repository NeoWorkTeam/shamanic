function Storage(){

    const data = 
    {
        cta01:"Start Program",
        cta02:"Start Free Course",
        cta02_loading_message:"Loading",
        video:"http://neowork.co/Banner.mp4",
        facebook:"http://facebook.co/",
        youtube:"http://neowork.co/",
        instagram:"http://neowork.co/",
        url_start_program:"http://neowork.co/",
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
            title: "Strengthen Your Heart 1",
            description: "Fortalece tu corazón/Cambia tu mentalidad/Empodera a tu comunidad.",
            avatar:"https://img.pngio.com/vector-hand-drawn-black-and-white-earth-vector-earth-hand-png-earth-black-and-white-595_595.png"
        },
        {
            id:2,
            module:"Module 02",
            title: "Strengthen Your Heart 2",
            description: "Fortalece tu corazón/Cambia tu mentalidad/Empodera a tu comunidad.",
            avatar:"https://img.pngio.com/vector-hand-drawn-black-and-white-earth-vector-earth-hand-png-earth-black-and-white-595_595.png"
        },
        {
            id:3,
            module:"Module 03",
            title: "Strengthen Your Heart 3",
            description: "Fortalece tu corazón/Cambia tu mentalidad/Empodera a tu comunidad.",
            avatar:"https://img.pngio.com/vector-hand-drawn-black-and-white-earth-vector-earth-hand-png-earth-black-and-white-595_595.png"
       },{
            id:4,
            module:"Module 04",
            title: "Strengthen Your Heart 4",
            description: "Fortalece tu corazón/Cambia tu mentalidad/Empodera a tu comunidad.",
            avatar:"https://img.pngio.com/vector-hand-drawn-black-and-white-earth-vector-earth-hand-png-earth-black-and-white-595_595.png"
       },
       
        ],
        about:{
            title:"About Sandra or Courses",
            text1:"Awaken to a fulfilled life of joy and service with expert guidance from the worlds top transformative teacher.",
            text2:"Through our course, you have access to powerful trainings to help achieve your full potential, and take all aspects of your life to the next level.",
            text3:"Through our course, you have access to powerful trainings to help achieve your full potential, and take all aspects of your life to the next level.",
            avatar:"https://img.pngio.com/vector-hand-drawn-black-and-white-earth-vector-earth-hand-png-earth-black-and-white-595_595.png",
            background:"https://img.pngio.com/vector-hand-drawn-black-and-white-earth-vector-earth-hand-png-earth-black-and-white-595_595.png"
        },
        bonuses:[
            {
                id:1,
                title: "Strengthen Your Heart 1",
                description: "Fortalece tu corazón/Cambia tu mentalidad/Empodera a tu comunidad.",
                avatar:"https://img.pngio.com/vector-hand-drawn-black-and-white-earth-vector-earth-hand-png-earth-black-and-white-595_595.png"
            },
            {
                id:2,
                title: "Strengthen Your Heart 2",
                description: "Fortalece tu corazón/Cambia tu mentalidad/Empodera a tu comunidad.",
                avatar:"https://img.pngio.com/vector-hand-drawn-black-and-white-earth-vector-earth-hand-png-earth-black-and-white-595_595.png"
            },
            {
                id:3,
                title: "Strengthen Your Heart 3",
                description: "Fortalece tu corazón/Cambia tu mentalidad/Empodera a tu comunidad.",
                avatar:"https://img.pngio.com/vector-hand-drawn-black-and-white-earth-vector-earth-hand-png-earth-black-and-white-595_595.png"
           },{
                id:4,
                title: "Strengthen Your Heart 4",
                description: "Fortalece tu corazón/Cambia tu mentalidad/Empodera a tu comunidad.",
                avatar:"https://img.pngio.com/vector-hand-drawn-black-and-white-earth-vector-earth-hand-png-earth-black-and-white-595_595.png"
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
   // localStorage.setItem('data', JSON.stringify(data));
   //JSON.parse(localStorage.getItem('data'))

    return  data

}
     
export default Storage