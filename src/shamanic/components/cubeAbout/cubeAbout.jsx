import React,{useState} from 'react';
import { Container,Row,Col } from 'react-bootstrap'

import ItemForm from '../itemForm/itemForm'

import Storage from '../storage'

const storage = Storage()

const CubeAbout = (props) => {

    const [interesting,setInteresting] = useState(false)

        return (<Container className="CubeAbout">
            <Row>
          
                <Col xs={12} md={12} >
                <h2 className="text-center">
                <span> { storage.about.title } </span>
                </h2>
                </Col>
        
                <Col xs={12} md={4} >

                
                </Col>
           
                <Col xs={12} md={8} >
                        <p>
                        { storage.about.text1 }<br/>
                        { storage.about.text2 }<br/>
                        { storage.about.text3 }
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




