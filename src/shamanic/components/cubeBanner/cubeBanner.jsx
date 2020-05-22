import React from 'react';
import { Container,Row,Col } from 'react-bootstrap'
import Cta01 from "../itemCta/itemCta"
import './cubeBannerStyle.css'


const CubeBanner = () => {

        return (<Container  className="CubeBanner">
            <Row>
            <Col xs={12} md={12} className="video">
            <iframe title="banner" width="100%" src="https://player.vimeo.com/video/421621071" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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