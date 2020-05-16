import React,{useState} from 'react';
import { Container,Row,Col } from 'react-bootstrap'
import Project from '../project/Project'

const RecentProjects = () => {

    const [data,setData] = useState([{
        "id":1,
        "title":"Animation",
        "media":"https://www.youtube.com/embed/vbbqx-_lXTc",
        "subtitle":"Atlanta 2018 ADDY Awards",
        "description":"We kicked off the 2018 ADDYs with this Matrix-inspired animation that brings out the 'Neo' in 'NeoWork' ",
        "url" : "https://youtu.be/vbbqx-_lXTc"
    },{
        "id":2,
        "title":"Motion Graphics",
        "media":"https://www.youtube.com/embed/vbbqx-_lXTc",
        "subtitle":"Sonim XP8",
        "description":"Craft compelling instructional materials with dynamic multimedia",
        "url" : "https://youtu.be/vbbqx-_lXTc"
    },{
        "id":3,
        "title":"3D Modeling",
        "media":"https://www.youtube.com/embed/vbbqx-_lXTc",
        "subtitle":"Good2grow",
        "description":"Complex manufacturing processes were conveyed with engaging visualizations of machinery",
        "url" : "https://youtu.be/vbbqx-_lXTc"
    },{
        "id":4,
        "title":"3D Modeling",
        "media":"https://www.youtube.com/embed/vbbqx-_lXTc",
        "subtitle":"Good2grow",
        "description":"Complex manufacturing processes were conveyed with engaging visualizations of machinery",
        "url" : "https://youtu.be/vbbqx-_lXTc"
    },{
        "id":5,
        "title":"3D Modeling",
        "media":"https://www.youtube.com/embed/vbbqx-_lXTc",
        "subtitle":"Good2grow",
        "description":"Complex manufacturing processes were conveyed with engaging visualizations of machinery",
        "url" : "https://youtu.be/vbbqx-_lXTc"
    },{
        "id":6,
        "title":"3D Modeling",
        "media":"https://www.youtube.com/embed/vbbqx-_lXTc",
        "subtitle":"Good2grow",
        "description":"Complex manufacturing processes were conveyed with engaging visualizations of machinery",
        "url" : "https://youtu.be/vbbqx-_lXTc"
    }
])
     


        return (<Container id="section1">

            <Row>
            <Col xs={12} md={12} >
                <h2 className="text-center">Recent Projects</h2>
            </Col>
            </Row>
            <Row>  
            { data.map((service)=>
             <Project description={service.description} title={service.title} media={service.media} subtitle={service.subtitle} />
            )}             
            </Row>
        </Container>)
        

}


export default RecentProjects






/*


class Services extends Component {

    state = {
        data:[{
            "id":1,
            "title":"Animation",
            "icon":"http://neowork.co/assets/gifsanimados/custom-animation_icon_v2.png"
        },{
            "id":2,
            "title":"Animation",
            "icon":"http://neowork.co/assets/gifsanimados/custom-animation_icon_v2.png"
        },{
            "id":3,
            "title":"Animation",
            "icon":"http://neowork.co/assets/gifsanimados/custom-animation_icon_v2.png"
        },{
            "id":4,
            "title":"Animation",
            "icon":"http://neowork.co/assets/gifsanimados/custom-animation_icon_v2.png"
        },{
            "id":5,
            "title":"Animation",
            "icon":"http://neowork.co/assets/gifsanimados/custom-animation_icon_v2.png"
        },{
            "id":6,
            "title":"Animation",
            "icon":"http://neowork.co/assets/gifsanimados/custom-animation_icon_v2.png"
        }]
    }
   

    async componentDidMount(){
        await this.fetchExercises()
    }

    fetchExercises = async () => {
        let res = await fetch('http://localhost:8000/api/contacts')
        let data = await res.json()
        console.log(data)
    }

    render(){
        return (
            <Container className="contenedor" >
            <Row>
                <Col xs={12}>
                    <h2>{this.props.title}</h2> 
                </Col>  
            </Row>
                
            <Row>

               { 
               this.state.data.map((service)=> { 
                return (<IconsServices title={service.title} icono={service.icon} />)
               })
               }
            
            </Row>
        </Container>
        )
    }
}

export default Services
*/