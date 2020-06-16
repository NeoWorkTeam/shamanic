import React from 'react';
import { Container,Row,Col } from 'react-bootstrap'
import ItemForm from '../itemForm/itemForm'
import Storage from '../../components/storage'

import './cubeFormStyle.css'


const storage = Storage()

const CubeForm = () => {
     
        return (<Container className='CubeForm'>
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

            
            </Row>
        </Container>)

}


export default CubeForm




