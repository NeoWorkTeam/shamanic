import React from 'react';
import { Container,Row,Col } from 'react-bootstrap'
import ItemForm from '../itemForm/itemForm'
import Storage from '../../components/storage'

import './cubeFormStyle.css'


const storage = Storage()

const CubeForm = (props) => {
     
        return (<Container className='CubeForm'>
            <Row>
            
            <Col xs={12} md={12} >
               <h1 className="text-center">
                        <span className="h1">
                                 { storage.banner.title01 }
                                  <br></br>
                                 { storage.banner.title02 } </span> 
                        <span className="especial" > { storage.banner.title03 } </span> 
               </h1>
            </Col>

           { props.form && <div style={{width:'100%', maxWidth:'480px',padding:'15px',height:'900px', margin:'auto', marginTop:'0px' }}>
                        <iframe title="joinnow" style={{width:'100%', height:'100%', border:'0'}} src="https://joinnow.live/embed/s/Fe2iP9?layout=styled-1"></iframe>
</div> }
            
            </Row>
        </Container>)

}


export default CubeForm




