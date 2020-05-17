import React,{useState} from 'react';
import { Container,Row,Col } from 'react-bootstrap'
import ContactForm from './contactForm'

import Storage from './storage'
const storage = Storage()

const divForm = {
   backgroundColor : storage.ctaColor
}   

const SectionAbout = (props) => {

    const [interesting,setInteresting] = useState(false)

    
    const [data,setData] = useState({
        "id":1,
        "title1":"About Sandra or Course",
        "title2":"Awaken to a fulfilled life of joy and service with expert guidance from the worlds top  transformative teacher.",
        "title3":"Through our course, you have access to powerful trainings to help achieve your full potential, and take all aspects of your life to the next level. "
        })
     
        return (<Container id="sectionAbout" className="section">
            <Row>
          
            <Col xs={12} md={12} >
               <h2 className="text-center">
               <span className="title"> { storage.about.title } </span>
               </h2>
            </Col>
        
            <Col xs={12} md={4} >

            
            </Col>
           
            <Col xs={12} md={8} >
                <p>
                { storage.about.text1 }<br/>
                { storage.about.text2 }<br/>
                { storage.about.text3 }
                </p>

                {
                    interesting 
                    ?
                    <ContactForm ></ContactForm>
                    :
                    <a href="#!" style={divForm} className="btn btn-primary cta-primary" onClick={ () => setInteresting(true)  }> 
                     { storage.cta02 }
                    </a>
                }
                

                    
            </Col>
           
            </Row>
        </Container>)

}


export default SectionAbout




