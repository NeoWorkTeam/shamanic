import React,{useState} from 'react';
import { Container,Row,Col } from 'react-bootstrap'
import ControlCarousel from "./controlCarousel"



const SectionGraduates = () => {

    const [data,setData] = useState({
        "id":1,
        "title1":"Contenido del Curso"
         })
     
        return (<Container id="SectionGraduates" className="section">
            <Row>
                
                <Col xs={12} md={12} >
                <h2 className="text-center">
                <span className="subtitle"> { data.title1 } </span>
                </h2>
                </Col>
            
                <Col xs={12} md={12} >
                <ControlCarousel/>
                </Col>
                
            </Row>
        </Container>)

}


export default SectionGraduates




