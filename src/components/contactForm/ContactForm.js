import React ,{ Component } from 'react'
import { Form,Button } from 'react-bootstrap'

const ContactForm = ( { onChange , form , onSubmit }) => (

        <Form onSubmit={onSubmit}>

          <Form.Group  controlId="formGridFullName">
            <Form.Label>Full Name</Form.Label>
            <input 
            type="text" 
            className="form-control" 
            name="fullname"
            onChange={onChange}
           value={form.fullname}
             /> 
          </Form.Group>
     
          <Form.Group controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <input 
            type="email" 
            className="form-control" 
            name="email"
            onChange={onChange}
            value={form.email}
             /> 
        </Form.Group>

        <Form.Group id="formGridMessage">
        <Form.Label>Please leave a message</Form.Label>
        <textarea 
        className="form-control"
         name="message"
         onChange={onChange}
         value={form.message}>
         </textarea>
        </Form.Group>
      
        <Button variant="primary" type="submit" >
         { form.submit }
        </Button>

      </Form>

       )  
  
export default ContactForm