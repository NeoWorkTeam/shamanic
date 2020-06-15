import React from 'react';
import { Container,Row,Col } from 'react-bootstrap'
import ItemForm from '../itemForm/itemForm'
import Storage from '../../components/storage'
import video from '../../img/banner.mp4'
import './cubeFormVideoStyle.css'


const storage = Storage()

const CubeForm = () => {
     
        return (
        
        
        
        <Container className='CubeForm'>
<video autoPlay="autoplay" loop="loop" muted className="Video" >
                <source src={video} type="video/mp4" />
                
            </video>
<div className="ContainerVideo" >
            
            <Row>
            
            <Col xs={12} md={12} >
               <h1 className="text-center">
                        <span className="h1">
                                 { storage.banner.title01 }
                                  <br></br>
                                 { storage.banner.title02 } </span> 
                        <span className="especial" > { storage.banner.title03 } </span> 
               </h1>
            </Col>

            <Col xs={12} md={12}>
                    <ItemForm />
            </Col>
            
            </Row>
        </div>
           
        </Container>)

}


export default CubeForm




