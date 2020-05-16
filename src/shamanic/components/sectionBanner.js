import React,{useState} from 'react';
import { Container,Row,Col } from 'react-bootstrap'

import Storage from './storage'
const storage = Storage()

const SectionBanner = () => {


        return (<Container id="section01" className="section">
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
                <a className="cta" href={ storage.url_start_program }>{ storage.cta01 }</a>
            </Col>
            </Row>
        </Container>)

}


export default SectionBanner




