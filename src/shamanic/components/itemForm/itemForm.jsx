import React from 'react';
import { withRouter } from "react-router-dom";
import { Spinner,Button ,InputGroup } from 'react-bootstrap'
import SimpleReactValidator from 'simple-react-validator';
import {  AiOutlineMail,AiOutlineUser } from 'react-icons/ai';
import swal from 'sweetalert'
import { useCookies } from 'react-cookie';
import { firebase } from '../firebase'
import Storage from '../storage'

const storage = Storage()

const ContactForm = (props) => {

    const [cookies, setCookie] = useCookies(['idSession'])
    const validator = new SimpleReactValidator()
    const [name,setName] = React.useState('')
    const [email,setEmail] = React.useState('')
    const [mode,setMode] = React.useState(false)
    const [emailValid,setEmailValid] = React.useState(false)
    

    const handlerAddUser = async (e) => {

          e.preventDefault();

        /* 
         if (!validator.fieldValid('email')) {
            swal( storage.contactForm.field02 , storage.contactForm.field02_message_null, "error");
            return 
         
          }

          if (!validator.fieldValid('name')) {
          swal( storage.contactForm.field01 , storage.contactForm.field01_message_null, "error");
            return 
          }
          */
        
         // if (validator.allValid()) {
        
            try{

                setMode(true)

                const db = firebase.firestore()

                //sessionStorage.removeItem('session')
                //sessionStorage.clear()

                
                const newContact = {
                    name:  name,
                    email: email,
                    date: Date.now(),
                    contact:true
                }
            
                const data = await db.collection('Contacts').add(newContact)
                setCookie('idSession',  data.id , { path: '/' });
                sessionStorage.setItem('session', JSON.stringify({...newContact,id: data.id }))
               
                  if(document.location.pathname==='/gabriel'){
                    props.history.push(storage.gabriel.url_sales_pages)
                  }else{
                    props.history.push('/practicas-chamanicas/intro01')
                  }
    
            }catch(error){

            
            }          
        }


    
  


    return (
            <form onSubmit={handlerAddUser}>
               
                <InputGroup className="mb-3">
                
                
                    <input 
                className="form-control" 
                name="name" 
                placeholder={ storage.contactForm.field01 }
                value={name}
                onChange={ (e) => setName(e.target.value) } />
                </InputGroup>


                { validator.message('name', name, 'required|max:100') }



                    <InputGroup className="mb-3">
                 
                    
                    <input 
                    className="form-control" 
                    name="email" 
                    placeholder={ storage.contactForm.field02 }
                    onChange={ (e) => setEmail(e.target.value) }
                    value={email} 

                ></input>
                </InputGroup>
                 { validator.message('email', email, 'required|email') }
 
                 {
                    mode ? 
                    <Button variant="primary "  className=' btn btn-primary btn-block' disabled>
                    <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    />
                    { storage.cta02_loading_message }
                </Button>
                :
                <button type="submit" className="btn btn-primary btn-block"> { storage.cta02 } </button>

                }
            </form>
        )
}

export default withRouter(ContactForm)

