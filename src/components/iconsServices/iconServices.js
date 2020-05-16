import React, {useState} from 'react';
import {Col,Card} from 'react-bootstrap'
import '../iconsServices/style.css'
import AOS from 'aos'

function  IconsServices(props){

    const [isShown, setIsShown] = useState(false);

      
            return (
                <Col  xs={6} md={4} className="IconsServices">
            
                   {!isShown ? (
                        <img  onMouseEnter={() => setIsShown(true)}  onMouseLeave={() => setIsShown(false)} loading="lazy" alt={props.title} className="icon" variant="top" src={props.icono} />
                     ) : (
                        <img  onMouseEnter={() => setIsShown(true)}  onMouseLeave={() => setIsShown(false)}  loading="lazy" alt={props.title} className="icon" variant="top" src={props.hover} />
                    )}

                <Card className="wrapper" >
                  <Card.Body>
                      <Card.Title key={props.id} className="title">{props.title}</Card.Title>
                  </Card.Body>
               </Card>
              </Col>
            )
        
}

AOS.init()
export default IconsServices