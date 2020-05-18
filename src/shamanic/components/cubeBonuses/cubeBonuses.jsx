import React from 'react';
import { Container,Row,Col } from 'react-bootstrap'
import ItemBonuses from "../itemBonuses/itemBonuses"
import "./cubeBonusesStyles.css"
import Storage from '../storage'
const storage = Storage()

const CubeBonuses = () => {

        return (<Container className="CubeBonuses">
            <Row>
                    <Col xs={12} md={12} >
                        <h2 className="text-center">
                         { storage.bonusesSection.title }
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


export default CubeBonuses




