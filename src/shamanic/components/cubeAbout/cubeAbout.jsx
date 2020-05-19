import React,{useState} from 'react';
import { Container,Row,Col } from 'react-bootstrap'
import ItemForm from '../itemForm/itemForm'
import Storage from '../storage'
import "./cubeAboutStyle.css"

const storage = Storage()

const CubeAbout = (props) => {

    const [interesting,setInteresting] = useState(false)

        return (<Container className="CubeAbout">
            <Row className="wrapper" >
          
                <Col xs={12} md={12} >
                <h2 className="text-center">
                <span> { storage.curso.title } </span>
                </h2>
                </Col>
        
                <Col xs={12} md={4} >

                
                </Col>
           
                <Col xs={12} md={8} >
                        <p>
                        { storage.curso.text1 }<br/><br/>
                        { storage.curso.text2 }<br/>
                        <br/>
                        </p>

                        {
                            interesting 
                            ?
                            <ItemForm />
                            :
                            <a href="#!"  className="btn btn-primary btn-block" onClick={ () => setInteresting(true)  }> 
                            { storage.cta02 }
                            </a>
                        }  
                </Col>
            </Row>
        </Container>)

}


export default CubeAbout




