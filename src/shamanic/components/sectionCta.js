import React from 'react';
import { Container,Row,Col } from 'react-bootstrap'

import Storage from './storage'
const storage = Storage()

const SectionCta = () => {
     
        return (<Container id="sectionCta" className="section">
            <Row>
            <Col xs={12} md={12} >
                <a  class="cta" href={ storage.url_start_program }> { storage.cta01 }</a>
            </Col>
            </Row>
        </Container>)

}

export default SectionCta