import React,{ useState } from 'react';
import { withRouter } from "react-router-dom";
import { Spinner,Button  } from 'react-bootstrap'
import { GoogleAnalyticsEvent }  from '../../analytics'

import SaveFirebase  from "../firebase/save"
import Storage from '../storage'
const storage = Storage()


function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

function Cta001(props){

    const [state,setState] = useState(false)

    const goOut = (props)=>  {


         setState(true)

         const query = {
            collection:"Contacts",
            data:{ 
                lead : Date.now()
            },
            id : getCookie('idSession')
         }
    
          SaveFirebase(query);

          //Registro de Eventos en Google Analytics
          if(document.location.pathname===storage.version01.intro_url){  
            GoogleAnalyticsEvent('Start Program  Oferta01')
          }else if(document.location.pathname===storage.version02.intro_url){ 
            GoogleAnalyticsEvent('Start Program  Oferta02')
          }else if(document.location.pathname===storage.gabriel.intro_url){
            GoogleAnalyticsEvent('Start Program Gabriel')
          }
        

          setTimeout(() => {

            if(document.location.pathname===storage.gabriel.intro_url){
                window.location.href = storage.gabriel.url_start_program         
            }else{
                window.location.href = storage.url_start_program
            }

          }, 3000)



         


          
           
    }

    const  [cta,setCta] = React.useState(storage.cta01)

    React.useEffect(() => {
          
          if(document.location.pathname===storage.version01.intro_url){
            setCta(storage.version01.cta02)
          }else if(document.location.pathname===storage.version02.intro_url){
            setCta(storage.version02.cta02)
          }else if(document.location.pathname===storage.version11.intro_url){
            setCta(storage.version11.cta02)
          }

     },[props]);

    if(!state)   return ( <Button className="btn btn-primary btn-block"  onClick={ () => goOut(props) } href="#!">{ cta }</Button> )
    if(state)  return ( 

        <Button variant="primary " className="btn-block btn btn-primary"  disabled>
        <Spinner
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
        />
        { storage.cta01_loading_message }
    </Button>
    )

}

export default withRouter(Cta001)
