import React, { useEffect, navig } from 'react';
import { withRouter } from "react-router-dom";
import { Spinner,Button ,InputGroup, FormControl } from 'react-bootstrap'

import { firebase } from './firebase'
import swal from 'sweetalert';
import SimpleReactValidator from 'simple-react-validator';
import {  FcCheckmark } from 'react-icons/fc';
import {  AiOutlineMail,AiOutlineUser } from 'react-icons/ai';


import Storage from './storage'





const ContactForm = (props) => {


    const validator = new SimpleReactValidator()

    const storage = Storage()

    const [name,setName] = React.useState("")
    const [email,setEmail] = React.useState("")
    const [mode,setMode] = React.useState(false)
    const [emailValid,setEmailValid] = React.useState(false)


    const handlerAddUser = async (e) => {

          e.preventDefault();

          if (!validator.fieldValid('email')) {
            swal( storage.contactForm.field02 , storage.contactForm.field02_message_null, "error");
            return 
          }

          if (!validator.fieldValid('name')) {
          swal( storage.contactForm.field01 , storage.contactForm.field01_message_null, "error");
            return 
          }


          if (validator.allValid()) {
           

            try{

                setMode(true)

                const db = firebase.firestore()
                
                const newContact = {
                    name:  name,
                    email: email,
                    date: Date.now(),
                    contact:true
                }
            
                const data = await db.collection('Contacts').add(newContact)
                localStorage.setItem('session', JSON.stringify({...newContact,id: data.id }));
                props.history.push('/ShamanicJourneying/'+data.id)
    
            }catch(error){

                
            }


          } else {

            

           
          
          }
          

        }


    
  


    return (
            <form onSubmit={handlerAddUser}>
               

              




                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1"> 
                    
                    {
                    
                    emailValid ?  <AiOutlineUser color="green" /> :  <AiOutlineUser color="gray" />
                    
                    
                    }

                    </InputGroup.Text>
                    </InputGroup.Prepend>
                    

                    <input 
                className="form-control" 
                name="name" 
                placeholder="Full Name"
                value={name}
                onChange={ (e) => setName(e.target.value) } />
                </InputGroup>


                { validator.message('name', name, 'required|max:100') }



                                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1"> 
                    
                    {
                    
                    emailValid ?  <AiOutlineMail color="green" /> :  <AiOutlineMail color="gray" />
                    
                    
                    }
                   
                    
                    </InputGroup.Text>
                    </InputGroup.Prepend>
                    
                    <input 
                    className="form-control" 
                    name="email" 
                    placeholder="Email Address"
                    onChange={ (e) => setEmail(e.target.value) }
                    value={email} 

                ></input>

                </InputGroup>


                 { validator.message('email', email, 'required|email') }




                {
                    mode ? 
                    <Button variant="primary "  className='cta-primary' disabled>
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
                <button type="submit" className="btn btn-primary cta-primary btn-block"> { storage.cta02 } </button>


                }
                


            </form>
        )
}




export default withRouter(ContactForm)

