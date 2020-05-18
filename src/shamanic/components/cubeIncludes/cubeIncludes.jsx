import React from 'react';
import { Container,Row,Col } from 'react-bootstrap'
import ItemIncludes from "../itemInclude/itemInclude"
import ItemCta from "../itemCta/itemCta"
import Storage from '../storage'
import './cubeIncludesStyles.css'

const storage = Storage()

const CubeIncludes = () => {


        return (<Container className="CubeIncludes">
            <Row>
            <Col xs={12} md={12} >
               <h2 className="text-center">
               <span className="title"> { storage.includesSection.title } </span>
               </h2>
            </Col>
            </Row>
            <Row>
            {
                storage.includes.map( ( item ) => (
                    <Col xs={12} md={12} >
                            <ItemIncludes  { ...item }  />
                    </Col>
                 ) )
            }    
                     <Col xs={12} md={12} >
                            <ItemCta />
                     </Col>
            </Row>
        </Container>)

}


export default CubeIncludes




