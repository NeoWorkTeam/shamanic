import React, {Component} from 'react';
import {Col,Card} from 'react-bootstrap'
import '../iconsServices/style.css'
import AOS from 'aos'


class Project extends Component{
        render(){
            return (
                <Col xs={12} md={4} className="">
                <Card  data-aos="fade-in"  className="wrapper" >
                <iframe loading="lazy" key='1' title='2' className='videoYoutube' src={this.props.media} />
                  <Card.Body>
                      <Card.Title key={this.id} className="title">{this.props.title}</Card.Title>
                      <h4>{this.props.subtitle}</h4>
                      <p>{this.props.description}</p>
                  </Card.Body>
               </Card>
              </Col>
            )
        }
}

AOS.init()
export default Project