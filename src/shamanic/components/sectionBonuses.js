import React,{useState} from 'react';
import { Container,Row,Col } from 'react-bootstrap'
import ItemBonuses from "./itemBonuses"

import Storage from './storage'
const storage = Storage()

const SectionProgramBonuses = () => {


     
        return (<Container id="SectionProgramBonuses" className="section">
            <Row>
                    <Col xs={12} md={12} >
                        <h2 className="text-center">
                        <span className="title"> { storage.bonusesSection.title } </span>
                        </h2>
                    </Col>
                    </Row>
                    <Row>
                
                    { storage.bonuses.map(( item  ) => (
                    <Col xs={12} md={6} >
                            <ItemBonuses { ...item } />
                    </Col>
                    ))}  




            </Row>
        </Container>)

}


export default SectionProgramBonuses




