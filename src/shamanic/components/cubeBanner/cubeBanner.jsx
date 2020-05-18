import React from 'react';
import { Container,Row,Col } from 'react-bootstrap'
import Cta01 from "../itemCta/itemCta"
import Storage from '../storage'
const storage = Storage()

const CubeBanner = () => {

        return (<Container  className="CubeBanner">
            <Row>
            <Col xs={12} md={12} className="video">

            <video width="100%" height="auto" controls>
            <source src={ storage.video } type="video/mp4" />
            <source src={ storage.video } type="video/ogg" />
            Your browser does not support the video tag.
            </video>
            </Col>
            </Row>
            <Row>
            <Col xs={12} md={12} >
                <Cta01></Cta01>
            </Col>
            </Row>
        </Container>)

}

export default CubeBanner