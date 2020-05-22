import React from 'react';
import { Container,Row,Col } from 'react-bootstrap'
import Cta01 from "../itemCta/itemCta"
import './cubeBannerStyle.css'

const CubeBanner = () => {

        return (<Container  className="CubeBanner">
            <Row>
            <Col xs={12} md={12} className="video">
            <iframe title="banner" src="https://player.vimeo.com/video/421621071" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
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