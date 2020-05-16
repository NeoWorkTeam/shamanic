import React,{useState} from 'react';
import { Container,Row,Col } from 'react-bootstrap'


const About = () => {

    const [data,setData] = useState({
        "id":1,
        "title":"About Us",
        "description":"We practice co-creation, informed by data and smart design to accomplish team-wide goals and personal side-projects. NeoWork’s office space in Medellín, Colombia, the innovation hub of South America, also doubles as a co-working space. We invite other small startups with a growth mindset to join us in co-creating to serve our communities - locally and globally.",
        "iframe":"http://neowork.co/map.php"
    })
     
        return (<Container>
            <Row>
            <Col xs={12} md={6} >
               <h2 className="text-center">{ data.title }</h2>
                <p className="text-center">{ data.description }</p>
            </Col>
            <Col xs={12} md={6} >
                <iframe loading="lazy" title='1' src={ data.iframe } />
            </Col>
            </Row>
        </Container>)

}


export default About




