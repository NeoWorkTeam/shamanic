import React from 'react';
import { withRouter } from "react-router-dom";
import { Spinner,Button ,InputGroup } from 'react-bootstrap'
import SimpleReactValidator from 'simple-react-validator';
import { useCookies } from 'react-cookie';
import { firebase } from '../firebase'
import Storage from '../storage'
import { GoogleAnalyticsEvent }  from '../../analytics'

const storage = Storage()

const ContactForm = (props) => {

    const [cookies, setCookie] = useCookies(['idSession'])
    const validator = new SimpleReactValidator()
    const [name,setName] = React.useState('')
    const [email,setEmail] = React.useState('')
    const [mode,setMode] = React.useState(false)
    
    const  [cta,setCta] = React.useState(storage.cta02)


    React.useEffect(() => {
          
       
      if(document.location.pathname==='/practicas-chamanicas/oferta01'){
        
        setCta(storage.version01.cta01);
        
        
      }else  if(document.location.pathname==='/practicas-chamanicas/oferta02'){
        
        setCta(storage.version02.cta01);

      }

     },[props]);

    const handlerAddUser = async (e) => {

          e.preventDefault();

            try{

                setMode(true)

                const db = firebase.firestore()
  
                GoogleAnalyticsEvent('Register Contact')

                const newContact = {
                    name:  name,
                    email: email,
                    date: Date.now(),
                    contact:true
                }
            
                const data = await db.collection('Contacts').add(newContact)
                setCookie('idSession',  data.id , { path: '/' });
                sessionStorage.setItem('session', JSON.stringify({...newContact,id: data.id }))
               
                  if(document.location.pathname===storage.version01.oferta_url){  
                     GoogleAnalyticsEvent('Register Contact Oferta01')
                      props.history.push(storage.version01.intro_url)
                  }else if(document.location.pathname===storage.version02.oferta_url){ 
                      GoogleAnalyticsEvent('Register Contact Oferta02') 
                      props.history.push(storage.version02.intro_url)
                  }else if(document.location.pathname===storage.gabriel.oferta_url){
                      GoogleAnalyticsEvent('Register Contact Gabriel') 
                      props.history.push(storage.gabriel.url_sales_pages)
                  }else {
                    props.history.push(storage.version01.intro_url)
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
                <button type="submit" className="btn btn-primary btn-block"> { cta }</button>

                }
            </form>
        )
}

export default withRouter(ContactForm)

