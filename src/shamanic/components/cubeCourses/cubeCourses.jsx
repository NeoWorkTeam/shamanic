import React from 'react';
import { Container,Row,Col } from 'react-bootstrap'
import ItemCarousel from "../itemCarousel/itemCarousel"
import "./cubeCoursesStyle.css"

import Storage from '../storage'
const storage = Storage()

const CubeCourses = () => {
        return (
        <div  className="CubeCourses" >
        <Row>
                <Col xs={12} md={12} >
                    <h2 className="text-center" >
                     { storage.coursesSection.title }
                    </h2>
                </Col>
        </Row>
       
            <Row className='background'>
                <Col xs={12} md={12} >
                <ItemCarousel/>
                </Col>
            </Row>
        </div>)
}


export default CubeCourses




