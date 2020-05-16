import React,{useState} from 'react';
import { Container,Row,Col } from 'react-bootstrap'
import IconsServices from '../iconsServices/iconServices'

const Services = () => {

    const [data,setData] = useState([{
        "id":1,
        "title":"Animation",
        "icon":"http://neowork.co/assets/gifsanimados/custom-animation_icon_v2.png",
        "hover":"http://neowork.co/assets/gifsanimados/custom_anim.gif"  
    },{
        "id":2,
        "title":"Animation",
        "icon":"http://neowork.co/assets/gifsanimados/custom-animation_icon_v2.png",
        "hover":"http://neowork.co/assets/gifsanimados/custom_anim.gif"  
    },{
        "id":3,
        "title":"Animation",
        "icon":"http://neowork.co/assets/gifsanimados/custom-animation_icon_v2.png",
        "hover":"http://neowork.co/assets/gifsanimados/custom_anim.gif"  
    },{
        "id":4,
        "title":"Animation",
        "icon":"http://neowork.co/assets/gifsanimados/custom-animation_icon_v2.png",
        "hover":"http://neowork.co/assets/gifsanimados/custom_anim.gif"  
    },{
        "id":5,
        "title":"Animation",
        "icon":"http://neowork.co/assets/gifsanimados/custom-animation_icon_v2.png",
        "hover":"http://neowork.co/assets/gifsanimados/custom_anim.gif"  
    },{
        "id":6,
        "title":"Animation",
        "icon":"http://neowork.co/assets/gifsanimados/custom-animation_icon_v2.png",
        "hover":"http://neowork.co/assets/gifsanimados/custom_anim.gif"  
    }])
     



        return (<Container>

            <Row>
            <Col xs={12} md={12} >
                <h2 className="text-center">Our Services</h2>
            </Col>
            </Row>
            <Row>  
            { data.map((service)=>
             <IconsServices title={service.title} icono={service.icon}  hover={service.hover}  />
            )}             
            </Row>
        </Container>)

}


export default Services






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